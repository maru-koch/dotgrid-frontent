
#: import modules
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveAPIView
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from .models import Device, RequestDevice, EnergyAnalytics, EnergyConsumption
from django.db.models import Q, Max, Avg, Min, Sum
from datetime import datetime, timedelta, date



#: import serializers
from .serializer import (
    DeviceSerializer,
    RequestDeviceSerializer,
    EnergyConsumptionSerializer,
    EnergyAnalyticSerializer)

#: Define View classes


class DevicesView(ListAPIView):
    """ Get all devices """
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()


class RequestDevicesView(ListCreateAPIView):
    """ Request for a device """
    serializer_class = RequestDeviceSerializer
    queryset = RequestDevice.objects.all()


class RetrieveDeviceView(RetrieveAPIView):
    """ Retrieve the details of a particular device"""
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()


class EnergyConsumptionView(ListAPIView):
    """ fetch the energy consumption for all devices"""
    serializer_class = EnergyConsumptionSerializer
    lookup_field = "pk"
   
    def get_queryset(self, request, format=None):
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

        if duration == 'daily':
            queryset = queryset.filter(date=start)
            #: estimate average, minimum, and maximum
            average =  queryset.aggregate(Avg('rate'))['rate__avg']
            maximum =  queryset.aggregate(Max('rate'))['rate__max']
            minimum =  queryset.aggregate(Min('rate'))['rate__min']
            total =    queryset.aggregate(Sum('rate'))['rate__sum']
            #: convert the query set to json
            serializer = EnergyConsumptionSerializer(queryset, many=True)
            return Response({
            'data': serializer.data, 
            'average': average,
            'maximum':maximum,
            'minimum':minimum,
            'total':total,
            })
        elif duration == 'weekly':
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
