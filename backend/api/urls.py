
from django.urls import path
from .views import (
    DevicesView,
    EnergyAnalyticView,
    RequestDevicesView,
    RetrieveDeviceView,
    EnergyConsumptionView
)

urlpatterns = [
    path('device/', DevicesView.as_view(), name="devices"),
    path('device/<pk>/', RetrieveDeviceView.as_view(), name="device"),
    path('device/request/<pk>', RequestDevicesView.as_view(), name="request"),
    path('device/energy/', EnergyConsumptionView.as_view(), name="energy"), 
    path('device/analytics/all', EnergyAnalyticView.as_view(), name="analytics"),
]

# http://127.0.0.1:8000/api/device/analytics/
