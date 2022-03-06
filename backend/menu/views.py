from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Category, Product
from .serializers import CategorySeriailizer, ProdcutSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySeriailizer
    # authentication_classes = [TokenAuthentication] rest_framework token을 사용할 때 지정
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        user = self.request.user
        print(user)
        queryset = user.category.all()
        return queryset

class ProductViewset(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProdcutSerializer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        user = self.request.user
        queryset = self.queryset
        search = self.request.query_params.get('category', None)
        print(user)
        if search:
            queryset = user.product.filter(category=search)
            print(queryset)
        else:
            queryset = queryset.filter(category='0')

        return queryset