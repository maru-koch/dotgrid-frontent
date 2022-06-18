from django.db import models
from account.models import Profile
from django.utils import timezone

DEVICE_TYPES = [

    ("smart_meter", "Smart Meter"),
    ("prepaid_meter", "Prepaid Meter")
]


class DeviceModel(models.Model):
    """ A description of the device model """
    image = models.ImageField(upload_to='image', blank=True)
    type = models.CharField(max_length=200, choices=DEVICE_TYPES)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.type


class Device(models.Model):
    """ A description of the device."""
    model = models.ForeignKey(DeviceModel, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name ="devices")

    def __str__(self):
        return f"{self.pk}"


class RequestDevice(models.Model):
    """ User can request device """
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    model = models.ForeignKey(DeviceModel, on_delete=models.CASCADE, related_name = "requests")
    date = models.DateField(default=timezone.now)
    is_assigned = models.BooleanField(default=False)

    def __str__(self):
        return self.model.type


class EnergyConsumption(models.Model):
    """ Energy consumption of each device """
    date = models.DateTimeField(auto_now_add=True)
    time = models.TimeField(auto_now=False)
    rate = models.FloatField(default=0.0)
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name = "metrics")
    
    def __str__(self):
        return f"{self.rate}"

Duration =(
    ('daily', 'Daily'),
    ('weekly', 'Weekly'),
)

class EnergyAnalytics(models.Model):
    """ Extimates the average, maximum and minimum energy consumption per device """
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    duration = models.CharField(max_length=200, choices=Duration)
    start = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    start = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    average = models.IntegerField(default = 0)
    maximum = models.IntegerField(default = 0)
    minimum = models.IntegerField(default = 0)

