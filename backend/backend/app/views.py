from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from django.contrib.auth.models import User
from .models import Events


@api_view(['POST'])
def custom_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(request, username=username, password=password)
    
    if user is not None:
        login(request, user)  
        return Response({'message': 'Login successful'})
    else:
        return Response({'message': 'Login failed'}, status=status.HTTP_UNAUTHORIZED)
    
@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    User.objects.create_user(username=username, password=password)

    return Response({'message': 'User registered successfully'})


@api_view(['POST'])
def make_event(request):
    title = request.data.get('title')
    date = request.data.get('date')
    description = request.data.get('description')
    location = request.data.get('location')

    Events.objects.create(title=title, date=date, description=description, location=location)

    return Response({'message': 'Event successfully'})