from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from django.contrib.auth.models import User
from .models import Events, Reviews
from django.http import HttpRequest


@api_view(['POST'])
def custom_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(request, username=username, password=password)
    
    if user is not None:
        login(request, user)  
        return Response({'message': 'Login successful'})
    else:
        return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)
    
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

@api_view(['GET'])
def get_events(request: HttpRequest):
    try:
        events = Events.objects.all()
        serialized_events = [{'title': event.title, 'description': event.description, 'date': event.date, 'location': event.location} for event in events]
        return Response(serialized_events)
    except Exception as e:
        print(f"Error in get_events view: {e}")
        return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['POST'])
def submit_review(request):
    try:
   
        data = request.data
        review = Reviews(
            title=data.get('title'),
            date=data.get('date'),
            q1=data.get('q1'),
            q2=data.get('q2'),
            q3=data.get('q3'),
            q4=data.get('q4'),
            q5=data.get('q5'),
            q6=data.get('q6'),
            q7=data.get('q7'),
            q8=data.get('q8'),
            q9=data.get('q9'),
            q10=data.get('q10'),
            comments=data.get('comments')
        )
        review.save()
        return Response({'message': 'Review submitted successfully'})
    except Exception as e:
        print(f"Error in submit_review view: {e}")
        return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['GET'])
def get_reviews(request):
    try:
        reviews = Reviews.objects.all()
        serialized_reviews = [
            {
                'title': review.title,
                'date': review.date,
                'q1': review.q1,
                'q2': review.q2,
                'q3': review.q3,
                'q4': review.q4,
                'q5': review.q5,
                'q6': review.q6,
                'q7': review.q7,
                'q8': review.q8,
                'q9': review.q9,
                'q10': review.q10,
                'comments': review.comments
            }
            for review in reviews
        ]
        return Response(serialized_reviews)
    except Exception as e:
        print(f"Error in get_reviews view: {e}")
        return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)