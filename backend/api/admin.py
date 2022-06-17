from django.contrib import admin
from .models import Device, DeviceModel, EnergyAnalytics, RequestDevice, EnergyConsumption

class DeviceAdmin(admin.ModelAdmin):
    list_display = ('id','model', 'user')
    list_filter=('id', 'model',)
    search_fields =('id', '')
    list_per_page = 25

class EnergyAdmin(admin.ModelAdmin):
    list_display = ('id','date', 'time', 'rate', 'device')
    list_filter=('date', 'device',)
    search_fields =('id', '')

class RequestDeviceAdmin(admin.ModelAdmin):
    list_display = ('user', 'model', 'date', 'is_assigned')
    list_filter = ('user',)
    search_fields =('id', 'model')

class EnergyAnalyticsAdmin(admin.ModelAdmin):

    list_display = ('device', 'average', 'maximum', 'minimum')
    readonly_fields = ('average', 'maximum', 'minimum')

    fieldsets = (
        ('SELECT A DEVICE', {'fields':('device', 'duration')}), 
        ('METRICS', {'fields': ('average', 'minimum', 'maximum')}),
    )
    
    list_filter = ('device',)
    search_fields =('device',)

admin.site.register(Device, DeviceAdmin)
admin.site.register(RequestDevice, RequestDeviceAdmin)
admin.site.register(DeviceModel)
admin.site.register(EnergyAnalytics, EnergyAnalyticsAdmin)
admin.site.register(EnergyConsumption, EnergyAdmin)