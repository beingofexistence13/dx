from django.db import models

# Create your models here.
class Students(models.Model): 
    name = models.CharField(max_length=100)
    stars = models.IntegerField()
    age = models.IntegerField()
    email = models.CharField(max_length=100)
    Comment = models.CharField(max_length=100)
    bff = models.CharField(max_length=100)
    # time = models.DateTimeField(auto_now_add=True)
    # video=models.FileField(upload_to="api/%y")