from django.shortcuts import render
from django.http import HttpResponse
from .serializers import GoalSerializer,TodoSerializer,NoteSerializer
from .models import Goal,Todo,Note
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView


# ListAPIView
class GoalList(ListAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
    
# Postdata    
class GoalCreate(CreateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
    
    
    
# RetrieveAPIView    
class GoalRetrieve(RetrieveAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
    
    
    
# UpdateAPIView    
class GoalUpdate(UpdateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


# DestroyAPIView    
class GoalDelete(DestroyAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer

    
    
    
    
    
# ListAPIView
class TodoList(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
# Postdata    
class TodoCreate(CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
    
    
# RetrieveAPIView    
class TodoRetrieve(RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
    
    
# UpdateAPIView    
class TodoUpdate(UpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


# DestroyAPIView    
class TodoDelete(DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
    
    
    
    
    
    
# ListAPIView
class NoteList(ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
# Postdata    
class NoteCreate(CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
    
    
# RetrieveAPIView    
class NoteRetrieve(RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
    
    
# UpdateAPIView    
class NoteUpdate(UpdateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


# DestroyAPIView    
class NoteDelete(DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer








    
    
    
    
  
# Create your views here.
def index(request):
    return HttpResponse("Hello world!")
    
    
    
    
    
    

                                                                                                                                                                                        