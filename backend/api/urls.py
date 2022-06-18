
from django.urls import path
from .views import (
    DevicesView,
    EnergyAnalyticView,
    RequestDevicesView,
    RetrieveDeviceView,
    EnergyConsumptionView, 
    get_energy,
    get_metrics,
)

urlpatterns = [
    path('device/', DevicesView.as_view(), name="devices"),
    path('device/<pk>/', RetrieveDeviceView.as_view(), name="device"),
    path('device/request/<pk>', RequestDevicesView.as_view(), name="request"),
    path('device/energy/', EnergyConsumptionView.as_view(), name="energy"), 
    path('device/energy/all/', get_energy, name="energy"),  # . 1
    path('device/analytics/all', EnergyAnalyticView.as_view(), name="analytics"),
    path('device/metrics/all/', get_metrics, name="metrics")  # average, minimum, and maximum
]

# http://127.0.0.1:8000/api/device/analytics/
