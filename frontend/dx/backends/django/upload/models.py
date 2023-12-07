from django.db import models

# Create your models here.

    
    
    
    
    
class Video(models.Model): 
    tittle = models.CharField(max_length=100,blank=True,null=True)
    video_url = models.CharField(max_length=300,blank=True,null=True)
    time = models.DateTimeField(auto_now_add=True)



class Image(models.Model): 
    post = models.CharField(max_length=100,blank=True,null=True)
    image_url = models.CharField(max_length=300,blank=True,null=True)
    time = models.DateTimeField(auto_now_add=True)
    
# We will make a demo model    