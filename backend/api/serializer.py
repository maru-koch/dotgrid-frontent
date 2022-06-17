
from symtable import Class
from rest_framework import serializers, status
from .models import Device, RequestDevice, EnergyConsumption, EnergyAnalytics
from rest_framework.response import Response


class DeviceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Device
        fields = "__all__"
        ordering = "-id"
    
class RequestDeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestDevice
        fields = ['model']

    def create(self, validated_data):
        request = RequestDevice.objects.create(**validated_data)
        return request

class EnergyAnalyticSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnergyAnalytics
        fields =['device', 'duration']
    

    
    