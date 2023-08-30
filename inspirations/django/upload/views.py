from django.shortcuts import render
from django.http import HttpResponse
from .serializers import VideoSerializer
from .models import Video
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView 



    
    
p1 = "Thapa"
print(p1)
print(Video.objects.all())
    
    
class VideoList(ListAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    # filterset_fields = ['name','id']

class VideoCreate(CreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer




# Create your views here.
def index(request):
    return HttpResponse("Hello world!")
    
    
    
    
    
    