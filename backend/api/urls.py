
from django.urls import path
from .views import (
    DevicesView, 
    RequestDevicesView, 
    EnergyAnalyticView, 
    RetrieveDeviceView, 
    EnergyConsumptionView)

urlpatterns =[
    path('devices/', DevicesView.as_view(), name="devices"),
    path('devices/<id>/', RetrieveDeviceView.as_view(), name="device"),
    path('devices/<id>/energy/', EnergyConsumptionView.as_view(), name="energy"),
    path('device/request/', RequestDevicesView.as_view(), name="request"),
    path('device/analytics/', EnergyAnalyticView.as_view(), name="analytics")
]
