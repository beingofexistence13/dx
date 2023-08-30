from django.db import models

# Sub models 📁📁📁
class Priority(models.Model):
    name = models.CharField(max_length=100,blank=True,null=True)
    def __str__(self):
        return self.name



# Create your models here.
class Goal(models.Model):
    tittle = models.CharField(max_length=100,blank=True,null=True)
    description = models.CharField(max_length=300,blank=True,null=True)
    priority = models.ForeignKey(
        Priority, related_name="goals", on_delete=models.CASCADE
    )
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.tittle}: {self.description}:  {self.priority} to {self.time}"
    

class Todo(models.Model):
    tittle = models.CharField(max_length=100,blank=True,null=True)
    description = models.CharField(max_length=300,blank=True,null=True)
    notes = models.TextField()
    category = models.ForeignKey(
        Goal, related_name="todos", on_delete=models.CASCADE
    )
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.tittle}: {self.description}:  {self.notes}: {self.category}: to {self.time}"




class Note(models.Model): 
    tittle = models.CharField(max_length=100,blank=True,null=True)
    main = models.CharField(max_length=300,blank=True,null=True)    
    video = models.CharField(max_length=100,blank=True,null=True)
    image = models.CharField(max_length=100,blank=True,null=True)
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.tittle}: {self.main}: {self.video}: {self.image}: to {self.time}"
    

    
    
    
    
    
    
    
class Checklist(models.Model): 
    today_date_temporary = models.CharField(max_length=100,blank=True,null=True)
    
    is_todays_bath = models.BooleanField(default=False)
    
    
    # main = models.CharField(max_length=300,blank=True,null=True)    
    # video = models.CharField(max_length=100,blank=True,null=True)
    # image = models.CharField(max_length=100,blank=True,null=True)
    # time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        # return f"{self.tittle}: {self.main}: {self.video}: {self.image}: to {self.time}"
        return f"{self.today_date_temporary}:{self.is_todays_bath}"
        
    
    