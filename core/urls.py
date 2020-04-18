from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('website.urls', namespace='website')),
    path('api/v1/', include('api.urls', namespace='api')),
    path('admin/', admin.site.urls),
]
