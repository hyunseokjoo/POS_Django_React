from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('categories', views.CategoryViewSet)
router.register('products', views.ProductViewset)

urlpatterns = [
    path('', include(router.urls)),
]
