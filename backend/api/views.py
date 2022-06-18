
#: import modules
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveAPIView
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from .models import Device, EnergyAnalytics, RequestDevice, EnergyConsumption
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
    permission_classes =[permissions.AllowAny]
    authentication_classes = [TokenAuthentication]
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()

class RequestDevicesView(ListCreateAPIView):
    permission_classes =[permissions.AllowAny]
    authentication_classes = [TokenAuthentication]
    serializer_class = RequestDeviceSerializer
    queryset = RequestDevice.objects.all()

class RetrieveDeviceView(RetrieveAPIView):
    permission_classes =[permissions.IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()

class EnergyConsumptionView(RetrieveAPIView):
    permission_classes =[permissions.IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = EnergyConsumptionSerializer
    query_set = EnergyConsumption.objects.all()

class EnergyAnalyticView(APIView):

    """ 
        gets the energy consumption by average,
        minimum and maximu energy consumption by each device
        per day, weekly

    """

    permission_classes =[permissions.AllowAny]
    authentication_classes = [TokenAuthentication]
    serializer_class = EnergyAnalyticSerializer
    authentication_classes = []

    def post(self, request):

        device = request.data['device']
        duration = request.data['duration']
        start = request.data['start']
        end = request.data['end']

        #: estimate daily or weekly energy consumption
        if duration == 'daily':
            energyConsumption = EnergyConsumption.objects.filter(device=device).values('id','rate')
        else:
            energyConsumption = EnergyConsumption.objects.filter(device=device).values('id','rate')

        #: average, minimum, maximum
        average = energyConsumption.aggregate(Avg('rate'))['rate__avg']
        maximum = energyConsumption.aggregate(Max('rate'))['rate__max']
        minimum = energyConsumption.aggregate(Min('rate'))['rate__min']
        total = energyConsumption.aggregate(Sum('rate'))['rate__sum']
    
        return Response({'device': device, 'duration':duration, 'average':average, 'maximum':maximum, 'minimum': minimum, 'sum': total})


