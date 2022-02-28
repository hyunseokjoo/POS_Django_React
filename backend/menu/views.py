from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from .models import Category, Product
from .serializers import CategorySeriailizer, ProdcutSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySeriailizer
    #permission_classes = [AllowAny,]
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated,]

class ProductViewset(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProdcutSerializer
    #permission_classes = [IsAuthenticated,]
