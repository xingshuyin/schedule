from schedule.models import FenBu, FenXiang, Material, XiangMu
from rest_framework import viewsets
from rest_framework import serializers
from rest_framework.serializers import Serializer
from rest_framework.decorators import action
from django.http import JsonResponse

from dvadmin.system.models import Area


class DataXiangMuSer(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class DataFenBuSer(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class DataFenXiangSer(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class DataMaterialSer(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class DataView(viewsets.ViewSet):

    @action(['get'], detail=False, url_path='xiangmu', url_name='xiangmu', permission_classes=[])
    def GetXiangMuAll(self, request):
        xiangmu = XiangMu.objects.all().values('id', 'name')
        ser = DataXiangMuSer(xiangmu, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=False, url_path='fenbu', url_name='fenbu', permission_classes=[])
    def GetFenBuAll(self, request):
        fenbu = FenBu.objects.all().values('id', 'name')
        ser = DataFenBuSer(fenbu, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=False, url_path='fenxiang', url_name='fenxiang', permission_classes=[])
    def GetFenXiangAll(self, request):
        fenxiang = FenXiang.objects.all().values('id', 'name')
        ser = DataFenXiangSer(fenxiang, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=False, url_path='fenxiang', url_name='fenxiang', permission_classes=[])
    def GetMaterialAll(self, request):
        material = Material.objects.all().values('id', 'name')
        ser = DataMaterialSer(material, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=True, url_path='unit', url_name='unit', permission_classes=[])
    def GetUserAll(self, request, pk):
        material = Material.objects.get(pk=pk)
        return JsonResponse({'code': 2000, 'data': {'unit': material.unit}}, safe=False)
