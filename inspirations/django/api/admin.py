from django.contrib import admin
from .models import Students

# Register your models here.
@admin.register(Students)
class StudentsAdmin(admin.ModelAdmin): 
    list_display = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']