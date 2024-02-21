from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomerSerializer
from .models import Customers

# Create your views here.
@api_view(['GET', 'POST'])
def customer(request):

    if request.method == 'GET':
        customer = Customers.objects.all()
        serializer = CustomerSerializer(customer, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer =CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['DELETE'])
def customer_detail(request, pk):
    try:
        customer = Customers.objects.get(pk=pk)
    except Customers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)