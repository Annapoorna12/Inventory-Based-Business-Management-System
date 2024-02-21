from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SupplierSerializer
from .models import Suppliers

# Create your views here.
@api_view(['GET', 'POST'])
def supplier(request):

    if request.method == 'GET':
        supplier = Suppliers.objects.all()
        serializer = SupplierSerializer(supplier, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer =SupplierSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['DELETE'])
def supplier_detail(request, pk):
    try:
        supplier = Suppliers.objects.get(pk=pk)
    except Suppliers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        supplier.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)