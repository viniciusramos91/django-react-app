from website.views import IndexView
from django.urls import path


app_name = 'website'

urlpatterns = [
    path('', IndexView.as_view())
]
