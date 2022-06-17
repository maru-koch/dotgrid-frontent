
from django.urls import path
from .views import DevicesView, RequestDevicesView, EnergyAnalyticView

urlpatterns =[
    path('devices/', DevicesView.as_view(), name="devices"),
    path('devices/request', RequestDevicesView.as_view(), name="request"),
    path('devices/analytics', EnergyAnalyticView.as_view(), name="analytics")
]
