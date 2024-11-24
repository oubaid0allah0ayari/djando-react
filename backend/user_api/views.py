from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from rest_framework.exceptions import ValidationError
from .validations import custom_validation, validate_email, validate_password


class UserRegister(APIView):
    permission_classes = (AllowAny,)
    
    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(user, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = (SessionAuthentication,)  # Use session-based authentication
    
    def post(self, request):
        data = request.data

        # Validate email and password format
        if not validate_email(data):
            raise ValidationError("Invalid email format.")
        if not validate_password(data):
            raise ValidationError("Invalid password format.")

        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)


class UserLogout(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()  # Logout doesn't require authentication
    
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)  # Use session-based authentication
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
