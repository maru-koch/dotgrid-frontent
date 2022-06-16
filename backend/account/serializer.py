
from rest_framework import serializers
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["email", "first_name", "last_name", "password"]

        # Prevents the password from showing after submission
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        new_user = CustomUser.objects.create(**validated_data)
        new_user.set_password(validated_data["password"])

        # Retrieve OTP from view
        otp = self.context["otp"]
        group = self.context["otp"]
        new_user.otp = otp
        new_user.is_individual = True

        new_user.save()
        return new_user
