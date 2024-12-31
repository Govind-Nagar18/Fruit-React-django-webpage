from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Fruits  
from .serializers import FruitSerializer    

@api_view(['GET'])
def GetFruit(request):
    fruit_list = Fruits.objects.all()
    serializer = FruitSerializer(fruit_list, many=True)
    return Response(serializer.data)

# @api_view(['POST']) 
# def setFruit(request):
#     Fruit = request.data
#     newFruit = FruitSerializer(data=Fruit)
#     if newFruit.is_valid():
#         newFruit.save() 
#         return Response(newFruit.data)
#     else:
#         return Response(newFruit.errors)
    
