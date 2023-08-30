from rest_framework import serializers
from .models import Video


# class ImageSerializer(serializers.ModelSerializer): 
#     class Meta: 
#         model = Students
#         fields = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age', 'video']
        
        
        

class VideoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Video
        fields = ['id', 'tittle', 'video_url', 'time']