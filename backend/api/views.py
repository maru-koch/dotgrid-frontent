from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, ListCreateAPIView
from rest_framework import permissions
from rest_framework import serializers
from .models import Device, EnergyAnalytics, RequestDevice, EnergyConsumption
from django.db.models import Q, Max, Avg, Min

# Create your views here.

from .serializer import DeviceSerializer, RequestDeviceSerializer, EnergyAnalyticSerializer

class DevicesView(ListAPIView):
    permission_classes =[permissions.AllowAny]
    authentication_classes = []
    serializer_class = DeviceSerializer
    queryset = Device.objects.all()

class RequestDevicesView(ListCreateAPIView):
    permission_classes =[permissions.AllowAny]
    serializer_class = RequestDeviceSerializer
    queryset = RequestDevice.objects.all()
    
class EnergyAnalyticView(APIView):
    permission_classes =[permissions.AllowAny]
    serializer_class = EnergyAnalyticSerializer
    authentication_classes = []

    """ This view gets the energy consumption by the devices and estimates the average, maximum and mininum """

    def post(self, request):
        index = request.data['device']
        duration = request.data['duration']
        print(index, duration)
        # convert queryset to json
        energyConsumption = (EnergyConsumption.objects.filter(device=index)).values('id','rate')
        # average = energyConsumption.aggregate(Avg('rate'))
        # maximum = energyConsumption.aggregate(Max('rate'))
        # minimum = energyConsumption.aggregate(Min('rate'))

        # data = {
        #     average : average['rate__avg'],
        #     maximum : maximum['rate__max'],
        #     minimum : minimum['rate__min']
        # }
       
        # serializer = EnergyAnalyticSerializer(data = data)
        # serializer.save() 
    
        return JsonResponse({'index': index, 'duration':duration, 'consumption': energyConsumption})


