from ..models import fenbu, fenxiang
from rest_framework import viewsets
from rest_framework import serializers
from rest_framework.serializers import Serializer
from rest_framework.decorators import action
from django.http import JsonResponse


class Data_fenbu_Ser(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class Data_guocheng_Ser(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class DataView(viewsets.ViewSet):

    @action(['get'], detail=False, url_path='fenbu', url_name='fenbu', permission_classes=[])
    def get_fenbu_all(self, request):
        fenbu = fenbu.objects.all().values('id', 'name')
        ser = Data_fenbu_Ser(fenbu, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=False, url_path='guocheng', url_name='guocehng', permission_classes=[])
    def get_fenxiang_all(self, request):
        fenxiang = fenxiang.objects.all().values('id', 'name')
        ser = Data_guocheng_Ser(fenxiang, many=True)
        return JsonResponse(ser.data, safe=False)