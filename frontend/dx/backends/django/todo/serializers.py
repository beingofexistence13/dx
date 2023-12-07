from rest_framework import serializers
from .models import Goal,Todo,Note


class GoalSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Goal
        fields = ["id", "tittle", "description", "priority", "time"]


class TodoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Todo
        fields = ["id", "tittle", "description", "notes", "category", "time"]

class NoteSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Note
        fields = ["id", "tittle", "main", "video", "image", "time"]
