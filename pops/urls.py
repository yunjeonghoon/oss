from django.urls import path

from . import views


urlpatterns = [
    path('', views.index,name='index'),
    path('startup.html/', views.startuphtml,name='startuphtml'),
    path('afe.html/', views.afe,name='afe'),
    path('startupagree.html/', views.agree,name='agree'),
]