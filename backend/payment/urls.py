from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('payments', views.PaymentViewSet)
router.register('paymentlist', views.PaymentListViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
