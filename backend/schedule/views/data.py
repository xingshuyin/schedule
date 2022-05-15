from schedule.models import DanWei, DanXiang, Material, XiangMu, FenBu, FenXiang
from rest_framework import viewsets
from rest_framework import serializers
from rest_framework.serializers import Serializer
from rest_framework.decorators import action
from django.http import JsonResponse

from dvadmin.system.models import Area



class DataXiangMuSer(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class DataDanWeiSer(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class DataDanXiangSer(Serializer):
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

    @action(['get'], detail=True, url_path='danwei', url_name='danwei', permission_classes=[])
    def GetDanWeiAll(self, request, pk):
        if pk == '0':
            danwei = DanWei.objects.all().values('id', 'name')
            ser = DataDanWeiSer(danwei, many=True)
            return JsonResponse(ser.data, safe=False)
        xiangmu = XiangMu.objects.get(pk=pk)
        danwei = DanWei.objects.filter(xiangmu=xiangmu).values('id', 'name')
        ser = DataDanWeiSer(danwei, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=True, url_path='danxiang', url_name='danxiang', permission_classes=[])
    def GetDanXiangAll(self, request, pk):
        if pk == '0':
            danxiang = DanXiang.objects.all().values('id', 'name')
            ser = DataDanWeiSer(danxiang, many=True)
            return JsonResponse(ser.data, safe=False)
        danwei = DanWei.objects.get(pk=pk)
        danxiang = DanXiang.objects.filter(danwei=danwei).values('id', 'name')
        ser = DataDanXiangSer(danxiang, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=True, url_path='fenbu', url_name='fenbu', permission_classes=[])
    def GetFenBuAll(self, request, pk):
        if pk == '0':
            fenbu = FenBu.objects.all().values('id', 'name')
            ser = DataDanWeiSer(fenbu, many=True)
            return JsonResponse(ser.data, safe=False)
        danxiang = DanXiang.objects.get(pk=pk)
        fenbu = FenBu.objects.filter(danxiang=danxiang).values('id', 'name')
        ser = DataDanXiangSer(fenbu, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=True, url_path='fenxiang', url_name='fenxiang', permission_classes=[])
    def GetFenXiangAll(self, request, pk):
        if pk == '0':
            fenxiang = FenXiang.objects.all().values('id', 'name')
            ser = DataDanWeiSer(fenxiang, many=True)
            return JsonResponse(ser.data, safe=False)
        fenbu = FenBu.objects.get(pk=pk)
        fenxiang = FenXiang.objects.filter(fenbu=fenbu).values('id', 'name')
        ser = DataDanXiangSer(fenxiang, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=False, url_path='material', url_name='material', permission_classes=[])
    def GetMaterialAll(self, request):
        material = Material.objects.all().values('id', 'name')
        ser = DataMaterialSer(material, many=True)
        return JsonResponse(ser.data, safe=False)

    @action(['get'], detail=True, url_path='unit', url_name='unit', permission_classes=[])
    def GetUnit(self, request, pk):
        material = Material.objects.get(pk=pk)
        return JsonResponse({'code': 2000, 'data': {'unit': material.unit}}, safe=False)
