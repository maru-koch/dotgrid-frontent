
from rest_framework import serializers
from .models import Profile

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["email", "first_name", "last_name", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        new_user = Profile.objects.create_user(**validated_data)
        new_user.set_password(validated_data["password"])

        return new_user


