from django.urls import path
from . import views 

urlpatterns = [
    path('get-fruits/', views.GetFruit), 
]

from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)