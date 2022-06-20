from rest_framework.permissions import BasePermission


class IsAdmin(BasePermission):
    """
    Allows access only to the admin only.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.is_superuser)
