from django.urls import path
from .views import RegisterationView

urlpatterns = [
    path('signup/', RegisterationView.as_view(), name="signup")
]
