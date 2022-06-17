from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from account.models import Profile

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
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name ="devices", null=True, blank=True)

    def __str__(self):
        return f"{self.pk}"

    
class EnergyConsumption(models.Model):
    """ Energy consumption of each device """
    date = models.DateTimeField(auto_now_add=True)
    time = models.TimeField(auto_now=False)
    rate = models.IntegerField(default=0)
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name = "metrics")
    
    def __str__(self):
        return f"{self.rate}"