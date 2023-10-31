from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 


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
