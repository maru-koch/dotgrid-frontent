
#: import module
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from api.permissions import IsAdmin
from .models import Device, RequestDevice, EnergyConsumption, DeviceModel
from django.db.models import Q, Max, Avg, Min, Sum
from datetime import date, time
from .utils import DummyEnergyData
from account.models import Profile

#: import serializers
from .serializer import (
    DeviceSerializer,
    RequestDeviceSerializer,
    EnergyConsumptionSerializer,
    DeviceModelSerializer,
    EnergyAnalyticSerializer)

#: Define View classes


class GenerateDataView(APIView):
    """ Generates dummy energy consumption data """
    #: only admins can assign device
    permission_classes = [IsAdmin]

    def post(self, request, format=None):
        days = int(request.data['day'])
        devices = int(request.data['devices'])

        #: generate dummy energy consumption data
        data = DummyEnergyData.generate(days, devices)

        try:
            #: go through the generated data
            for index, dataset in enumerate(data, start=1):
                #: get device ID
                device = dataset[f'device_{index}']
                rate_per_hour = device[f'day_{index}']
                for day in range(days):
                    for hour, rate in rate_per_hour:
                        d = date(2022, 6, day+1)
                        h = time(hour, 0, 0)
                        device = Device.objects.get(pk=index)
                        energy = EnergyConsumption.objects.create(
                            date=d, hour=h, rate=rate, device=device)
                        energy.save()
                        return Response({'data': energy})

        except:
            return Response({'error': 'Invalid data'})
        finally:
            return Response({'message': 'data generated successfully', 'data': data}, status=status.HTTP_200_OK)


class DeviceModelView(CreateAPIView):
    """ Add device model """
    serializer_class = DeviceModelSerializer
    queryset = DeviceModel.objects.all()


class DevicesView(ListAPIView):
    """ Gets all devices """
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()


class AssignDeviceView(APIView):
    """ Gets the model and a user and assigns the user to the model """
    #: only admins can assign device
    permission_classes = [IsAdmin]

    def post(self, request, format=None):
        user_id = request.data['user_id']
        model_id = request.data['model_id']
        model = DeviceModel.objects.get(pk=model_id)
        user = Profile.objects.get(pk=user_id)
        device = Device.objects.create(model=model, user=user)
        device.save()
        return Response({'message': f'{model.type} successfully assigned to {user.first_name}'})


class RequestDeviceView(APIView):
    """ Request for a device """

    def post(self, request):
        user = request.user
        model_id = request.data['model']
        model = DeviceModel.objects.get(pk=model_id)
        request = RequestDevice.objects.create(user=user, model=model)
        serializer = RequestDeviceSerializer(request)
        return Response({'message': 'Request successful', 'data': serializer.data}, status=status.HTTP_201_CREATED)


class ApproveRequestDeviceView(APIView):
    """ Request for a device """

    #: only admins can approve device
    permission_classes = [IsAdmin]

    def post(self, request):

        request_id = request.data['request_id']
        request = RequestDevice.objects.get(pk = request_id)
        request.is_assigned = True
        request.save()
        return Response({'message': 'Request approved', 'is_assigned': request.is_assigned}, status=status.HTTP_200_OK)


class RetrieveDeviceView(RetrieveAPIView):
    
    """ Retrieve the details of a particular device"""

    def get(self, request, format=None):
        user_id = request.data['user_id']
        user = Profile.objects.get(pk=user_id)
        user_devices = Device.objects.filter(user__pk = user_id)
        if user_devices is not None:
            serializer = DeviceSerializer(user_devices)
            return Response({'devices': serializer.data}, status=status.HTTP_200_OK)
        return Response({'error':f'No device has been assigned to {user.first_name}'})


class EnergyConsumptionView(ListCreateAPIView):
    """ fetch the energy consumption for all devices"""
    serializer_class = EnergyConsumptionSerializer

    def get_queryset(self):
        queryset = EnergyConsumption.objects.all()
        return Response(queryset)


class EnergyAnalyticView(APIView):
    """ Evaluate device(s) energy consumption"""

    """ 
        gets the energy consumption by average,
        minimum and maximu energy consumption by each device
        per day, weekly

    """
    serializer_class = EnergyAnalyticSerializer

    def post(self, request):

        #: getting user's input
        device_id = int(request.data['device'])
        duration = request.data['duration']
        start = request.data['start']
        end = request.data['end']

        #  ESTIMATION OF AVERAGE, MINIMUM AND MAXIMUM
        try:
            device = Device.objects.get(pk=device_id)
            queryset = EnergyConsumption.objects.filter(device=device)
            if duration == 'daily':
                queryset = queryset.filter(date=start)
            #: estimate average, minimum, and maximum
                average = queryset.aggregate(Avg('rate'))['rate__avg']
                maximum = queryset.aggregate(Max('rate'))['rate__max']
                minimum = queryset.aggregate(Min('rate'))['rate__min']
                total = queryset.aggregate(Sum('rate'))['rate__sum']
            #: convert the query set to json
                serializer = EnergyConsumptionSerializer(queryset, many=True)
                return Response({
                    'data': serializer.data,
                    'average': average,
                    'maximum': maximum,
                    'minimum': minimum,
                    'total': total,
                })
            elif duration == 'weekly':

                """ 
                    Get a device energy consumption based on the specified
                    start and end date
                """
                queryset = queryset.filter(date__range=[start, end])
                average = queryset.aggregate(Avg('rate'))['rate__avg']
                maximum = queryset.aggregate(Max('rate'))['rate__max']
                minimum = queryset.aggregate(Min('rate'))['rate__min']
                total = queryset.aggregate(Sum('rate'))['rate__sum']
                serializer = EnergyConsumptionSerializer(queryset, many=True)
                return Response({
                    'data': serializer.data,
                    'average': average,
                    'maximum': maximum,
                    'minimum': minimum,
                    'total': total,
                })
            else:
                return Response({'error': 'No data for the specified period'})
        except ObjectDoesNotExist:
            return Response({'error': 'There is no device with the specified ID'})
