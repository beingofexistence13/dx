
from . import views
from django.urls import path





urlpatterns = [
    path('index/', views.index, name='index'),
    # path('v', views.StudentList.as_view()),
    # path('vc', views.StudentCreate.as_view()),
    path('v', views.VideoList.as_view()),
    path('vc', views.VideoCreate.as_view()),


]