
from rest_framework import serializers

#: import models
from .models import (
    DeviceModel,
    Device, 
    RequestDevice, 
    EnergyConsumption, 
    EnergyAnalytics)

class DeviceModelSerializer(serializers.ModelSerializer):
    """ Serializer for the Device Model """
    class Meta:
        model = DeviceModel
        fields = "__all__"
        ordering = "-id"

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

class EnergyAnalyticSerializer(serializers.Serializer):
    """ Serializer for the Energy Analytics Model """
    device = serializers.CharField()
    duration = serializers.CharField()
    start = serializers.DateField()
    end = serializers.DateField()
    
class EnergyConsumptionSerializer(serializers.ModelSerializer):
    """ Serializer for the Energy Consumption Model """
    class Meta:
        model = EnergyConsumption
        fields =('id','date', 'hour', 'rate', 'device')

        extra_kwargs = ({'hour': {'read_only': True}, 'device': {'read_only': True}})

class GenerateDataSerializer(serializers.Serializer):
    """ Serializer for the Energy Analytics Model """
    device = serializers.IntegerField()
    duration = serializers.IntegerField()
