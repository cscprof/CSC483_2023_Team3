
from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', views.custom_login, name='api-login'), 
    path('api/register/', views.register_user, name='register_user'),
    path('api/makeEvent/', views.make_event, name='make_event'),
     path('api/events/', views.get_events, name='get_events'),
]