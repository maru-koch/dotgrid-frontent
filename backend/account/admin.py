from django.contrib import admin
from .models import CustomUser

class UserAdmin(admin.ModelAdmin):
    list_display = ('email','first_name','last_name','password')
    list_filter=('first_name', 'last_name',)
    search_fields =('first_name', 'last_name','device','')
    list_per_page = 25

admin.site.register(CustomUser, UserAdmin)

