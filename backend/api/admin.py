from django.contrib import admin
from .models import Device, DeviceModel, EnergyConsumption

class DeviceAdmin(admin.ModelAdmin):
    list_display = ('id','model', 'user')
    list_filter=('id', 'model',)
    search_fields =('id', '')
    list_per_page = 25

class EnergyAdmin(admin.ModelAdmin):
    list_display = ('id','date', 'time', 'rate', 'device')
    list_filter=('date', 'device',)
    search_fields =('id', '')

admin.site.register(Device, DeviceAdmin)
admin.site.register(DeviceModel)
admin.site.register(EnergyConsumption, EnergyAdmin)