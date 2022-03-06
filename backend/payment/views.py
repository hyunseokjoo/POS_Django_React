from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Payment, PaymentList
from .serializers import PaymentSeriailizer, PaymentListSeriailizer

class PaymentViewSet(ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSeriailizer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        user = self.request.user
        queryset = user.payment.all()
        return queryset

    def create(self, request, *args, **kwargs):
        itemList = request.data['itemList']  # 리스트 형식의 상품 받아오기

        amount = 0  # 총 금액 계산하기
        for item in itemList:
            amount = amount + (int(item['number']) * int(item['price']))

        seData = {'amount': amount}  # 총 합계 데이터 생성
        serializer = self.get_serializer(data=seData)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer) # 세이브

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)

class PaymentListViewSet(ModelViewSet):
    queryset = PaymentList.objects.all()
    serializer_class = PaymentListSeriailizer
    permission_classes = [IsAuthenticated,]

    def create(self, request, *args, **kwargs):
        payment_id = request.data['payment_id']
        itemList = request.data['itemList']

        for item in itemList:
            seData = {'payment': payment_id,
                      'name': item['name'],
                      'price': item['price'],
                      'amount': item['number']}
            serializer = self.get_serializer(data=seData)
            print(seData)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)


        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()