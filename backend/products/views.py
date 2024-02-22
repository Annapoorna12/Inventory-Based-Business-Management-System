from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Products
from .serializers import ProductSerializer

@api_view(['GET', 'POST'])
def product_list(request):
    try:
        if request.method == 'POST':
            if 'image' in request.FILES:
                uploaded_file = request.FILES['image']

                # Print or log information about the uploaded file
                print("Received file:", uploaded_file.name)
                print("File size:", uploaded_file.size)
            
            serializer = ProductSerializer(data=request.data)
            if serializer.is_valid():
                product=serializer.save(img=request.FILES.get('image'))
                # serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'GET':
            product = Products.objects.all()
            serializer = ProductSerializer(product, many=True)
            return Response(serializer.data)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)