
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('', include('FruitApi.urls')),
    path('admin/', admin.site.urls),
]

from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)