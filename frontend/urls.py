from django.urls import path
from . import views

urlpatterns = [
    path('', views.frontend, name='library'),
    path('login', views.login, name='login'),
]