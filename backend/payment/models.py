from django.db import models
from django.conf import settings


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Payment(TimestampedModel):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='payment', on_delete=models.CASCADE)
    amount = models.IntegerField()

    def __str__(self):
        return str(self.id)

class PaymentList(TimestampedModel):
    payment = models.ForeignKey('Payment', related_name='payment_list', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    price = models.CharField(max_length=500)
    amount = models.IntegerField(default=1, blank=False)


