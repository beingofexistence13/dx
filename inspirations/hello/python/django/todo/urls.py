from django.urls import path
from . import views





urlpatterns = [
    path('', views.index, name='index'),
    
    path('g/', views.GoalList.as_view()),
    path('t/', views.TodoList.as_view()),
    path('n/', views.NoteList.as_view()),
    
    
    
    path('gc/', views.GoalCreate.as_view()),
    path('tc/', views.TodoCreate.as_view()),
    path('nc/', views.NoteCreate.as_view()),
    
    
    
    
    path('gr/<int:pk>/', views.GoalRetrieve.as_view()),
    path('tr/<int:pk>/', views.TodoRetrieve.as_view()),
    path('nr/<int:pk>/', views.NoteRetrieve.as_view()),
    
    
    
    
    
    
    path('gu/<int:pk>/', views.GoalUpdate.as_view()),
    path('tu/<int:pk>/', views.TodoUpdate.as_view()),
    path('nu/<int:pk>/', views.TodoUpdate.as_view()),
    
    
    
    
    
    
    
    
    path('gd/<int:pk>/', views.GoalDelete.as_view()),
    path('td/<int:pk>/', views.TodoDelete.as_view()),
    path('nd/<int:pk>/', views.NoteDelete.as_view()),
    
    
    
    
    
    
    
    
    
   

]