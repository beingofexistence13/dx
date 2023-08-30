from django.contrib import admin
from .models import Students
from .models import Category, Ingredient

# Register your models here.

@admin.register(Students)
class StudentsAdmin(admin.ModelAdmin): 
    list_display = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']
    
    

admin.site.register(Category)
admin.site.register(Ingredient)