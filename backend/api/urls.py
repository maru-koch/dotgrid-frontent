
from django.urls import path
from .views import (
    DevicesView,
    DeviceModelView,
    AssignDeviceView,
    EnergyAnalyticView,
    RequestDeviceView,
    ApproveRequestDeviceView,
    RetrieveDeviceView,
    EnergyConsumptionView, 
    GenerateDataView
)

urlpatterns = [
    path('device/', DevicesView.as_view(), name="devices"),
    path('device/add-model', DeviceModelView.as_view(), name="models"),
    path('device/assign-user', AssignDeviceView.as_view(), name="assign-user"),
    path('device/<pk>/', RetrieveDeviceView.as_view(), name="device"),
    path('device/request/approve', ApproveRequestDeviceView.as_view(), name="request"),
    path('device/energy/', EnergyConsumptionView.as_view(), name="energy"), 
    path('device/energy/generate', GenerateDataView.as_view(), name="generate"),
    path('device/analytics/all', EnergyAnalyticView.as_view(), name="analytics"),
]

# http://127.0.0.1:8000/api/device/analytics/
