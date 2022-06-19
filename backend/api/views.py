
#: import module
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from .models import Device, RequestDevice,EnergyConsumption, DeviceModel
from django.db.models import Q, Max, Avg, Min, Sum
from datetime import datetime, timedelta, date, time
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
    def post(self, request, format = None):
        days = int(request.data['day'])
        devices = int(request.data['devices'])

        #: generate dummy energy consumption data
        data=DummyEnergyData.generate(days, devices)
        try:
            for index, dataset in enumerate(data, start=1):
                device = dataset[f'device_{index}']
                rate_per_hour = device[f'day_{index}']
                for day in range(days):   
                    for hour, rate in rate_per_hour:
                        d = date(2022, 6, day+1)
                        t = time(hour, 0, 0)
                        print(d, t)
                        print(index, day, hour, rate)
                        device = Device.objects.get(pk = index)
                        energy =EnergyConsumption.objects.create(date = d, time = t, rate = rate, device = device)
                        energy.save()
        except:
            return Response({'error':'Invalid data'})
        finally:
            return Response(data)
            

           
class GetDeviceModelView(ListCreateAPIView):
    serializer_class = DeviceModelSerializer
    queryset = DeviceModel.objects.all()

class DevicesView(ListAPIView):
    """ Assign device to a user """
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()

class AssignDeviceView(APIView):
    def post(self, request, format=None):
        user_id = request.data['user']
        model_id = request.data['model']
        model = DeviceModel.objects.get(pk = model_id)
        user = Profile.objects.get(pk = user_id)
        Device.objects.create(model=model, user=user)

class RequestDevicesView(ListCreateAPIView):
    """ Request for a device """
    serializer_class = RequestDeviceSerializer
    queryset = RequestDevice.objects.all()


class RetrieveDeviceView(RetrieveAPIView):
    """ Retrieve the details of a particular device"""
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()


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
        device = request.data['device']
        duration = request.data['duration']
        start = request.data['start']
        end = request.data['end']

        print(device, duration, start, end)
      
        #: estimate daily or weekly energy consumption
        queryset = EnergyConsumption.objects.filter(device=device)

        #  ESTIMATION OF AVERAGE, MINIMUM AND MAXIMUM

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
