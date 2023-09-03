from django.urls import path
from openaiApp.views import chat

urlpatterns = [
    path('', chat)
]