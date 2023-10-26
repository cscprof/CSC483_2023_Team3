from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['POST'])
def user_register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if user_is_valid: 
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return Response("Registration successful", status=status.HTTP_201_CREATED)
    else:
        return Response("Registration failed", status=status.HTTP_400_BAD_REQUEST)


