
from django.urls import path
from .views import (
    DevicesView, 
    RequestDevicesView, 
    EnergyAnalyticView, 
    RetrieveDeviceView, 
    EnergyConsumptionView)

urlpatterns =[
    path('devices/', DevicesView.as_view(), name="devices"),
    path('device/<id>/', RetrieveDeviceView.as_view(), name="device"),
    path('device/energy/', EnergyConsumptionView.as_view(), name="energy"),
    path('device/request/<id>', RequestDevicesView.as_view(), name="request"),
    path('device/analytics/', EnergyAnalyticView.as_view(), name="analytics")
]
