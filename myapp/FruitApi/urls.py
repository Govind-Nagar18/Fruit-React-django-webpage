from django.urls import path
from . import views 

urlpatterns = [
    path('get-fruits/', views.GetFruit), 
]
