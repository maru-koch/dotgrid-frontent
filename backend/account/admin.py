from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Profile

class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name','last_name')
    list_filter=('first_name', 'last_name',)
    search_fields =('first_name', 'last_name','device','')
    list_per_page = 25

    fieldsets = (
        
                ("Personal Info", {'fields':('email','first_name', 'last_name')}), 
                ("Permission", {'fields':('is_staff','is_superuser')}), 
                ("Additional Info", {'fields':('last_login',)}), 
                )
                
admin.site.register(Profile, UserAdmin)

