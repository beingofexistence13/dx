from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import MyTokenObtainPairView



from . import views





urlpatterns = [
    path('index/', views.index, name='index'),
    path('add/', views.add, name='add'),
    
    path('', views.StudentList.as_view()),
    path('c', views.StudentCreate.as_view()),
    path('gp', views.StudentListCreate.as_view()),
    path('r/<int:pk>/', views.StudentRetrieve.as_view()),
    path('u/<int:pk>/', views.StudentUpdate.as_view()),
    path('d/<int:pk>/', views.StudentDelete.as_view()),
    path('ru/<int:pk>/', views.StudentRetrieveUpdate.as_view()),
    path('rd/<int:pk>/', views.StudentRetrieveDestroy.as_view()),
    path('rud/<int:pk>/', views.StudentRetrieveUpdateDestroy.as_view()),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    

    
]