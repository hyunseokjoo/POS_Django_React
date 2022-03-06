from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Payment, PaymentList
from datetime import datetime

User = get_user_model()

class PaymentSeriailizer(serializers.ModelSerializer):
    created_time = serializers.SerializerMethodField("created_time_field")

    def created_time_field(self, Payment):
        return Payment.created_a

    class Meta:
        model = Payment
        fields = ['id', 'amount', 'created_time']


class PaymentListSeriailizer(serializers.ModelSerializer):


    class Meta:
        model = PaymentList
        fields = ['id', 'payment', 'name', 'price', 'amount',]