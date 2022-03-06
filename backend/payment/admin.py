from django.contrib import admin
from .models import Payment, PaymentList

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    pass


@admin.register(PaymentList)
class PaymentListAdmin(admin.ModelAdmin):
    pass
