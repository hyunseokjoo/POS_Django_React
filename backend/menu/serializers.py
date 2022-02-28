from rest_framework import serializers
from .models import Category, Product

class CategorySeriailizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProdcutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'