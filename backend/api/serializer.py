
from symtable import Class
from rest_framework import serializers, status
from .models import Device, RequestDevice, EnergyConsumption, EnergyAnalytics
from rest_framework.response import Response


class DeviceSerializer(serializers.ModelSerializer):
    """ Serializer for the Device Model """
    class Meta:
        model = Device
        fields = "__all__"
        ordering = "-id"
    
class RequestDeviceSerializer(serializers.ModelSerializer):
    """ Serializer for the Request Device Model """
    class Meta:
        model = RequestDevice
        fields = ['model']

    def create(self, validated_data):
        request = RequestDevice.objects.create(**validated_data)
        return request

class EnergyAnalyticSerializer(serializers.ModelSerializer):
    """ Serializer for the Energy Analytics Model """
    class Meta:
        model = EnergyAnalytics
        fields =['device', 'duration']
    
class EnergyConsumptionSerializer(serializers.ModelSerializer):
    """ Serializer for the Energy Consumption Model """
    class Meta:
        model = EnergyConsumption
        fields =('id','date', 'hour', 'rate', 'device')
    