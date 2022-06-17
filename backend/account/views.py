
from rest_framework.generics import CreateAPIView
from rest_framework import status, permissions
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from account.models import Profile

from .serializer import RegisterSerializer
# Create your views here.

class RegisterationView(CreateAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = []
    permission_classes = [permissions.AllowAny]

    
    