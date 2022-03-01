from rest_framework import serializers
from .models import Category, Product

class CategorySeriailizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'display_seq']

class ProdcutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'price', 'display_seq']
