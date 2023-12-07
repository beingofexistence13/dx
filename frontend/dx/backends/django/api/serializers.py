from rest_framework import serializers
from .models import Students


class StudentSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Students
        fields = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']