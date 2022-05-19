from schedule.models import DanWei, DanXiang, Material, XiangMu, FenBu, FenXiang
from rest_framework import viewsets
from rest_framework import serializers
from rest_framework.serializers import Serializer
from rest_framework.decorators import action
from django.http import JsonResponse
from django.db import models
from django.forms.models import model_to_dict


class SearchSer(Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


def search(pk, f: models.Model, s: models.Model):
    f_name = f._meta.model_name  # 获取模型名
    if pk == '0':
        son = s.objects.all().values('id', 'name')
        ser = SearchSer(son, many=True)
        return JsonResponse(ser.data, safe=False)
    father = f.objects.get(pk=pk)
    son = s.objects.filter(**{f_name: father}).values('id', 'name')
    ser = SearchSer(son, many=True)
    return JsonResponse(ser.data, safe=False)


class DataView(viewsets.ViewSet):

    @action(['get'], detail=False, url_path='xiangmu', url_name='xiangmu', permission_classes=[])
    def GetXiangMuAll(self, request):
        return search('0', XiangMu, XiangMu)

    @action(['get'], detail=True, url_path='danxiang', url_name='danxiang', permission_classes=[])
    def GetDanXiangAll(self, request, pk):
        return search(pk, XiangMu, DanXiang)

    @action(['get'], detail=True, url_path='danwei', url_name='danwei', permission_classes=[])
    def GetDanWeiAll(self, request, pk):
        return search(pk, DanXiang, DanWei)

    @action(['get'], detail=True, url_path='fenbu', url_name='fenbu', permission_classes=[])
    def GetFenBuAll(self, request, pk):
        return search(pk, DanWei, FenBu)

    @action(['get'], detail=True, url_path='fenxiang', url_name='fenxiang', permission_classes=[])
    def GetFenXiangAll(self, request, pk):
        return search(pk, FenBu, FenXiang)

    @action(['get'], detail=False, url_path='material', url_name='material', permission_classes=[])
    def GetMaterialAll(self, request):
        return search('0', Material, Material)

    @action(['get'], detail=True, url_path='unit', url_name='unit', permission_classes=[])
    def GetUnit(self, request, pk):
        material = Material.objects.get(pk=pk)
        return JsonResponse({'code': 2000, 'data': {'unit': material.unit}}, safe=False)

    @action(['get'], detail=True, url_path='chart', url_name='chart', permission_classes=[])
    def GetChart(self, request, pk):
        fenxiangs = [{'fenbu_name': i.name, 'fb': i, 'fenxiang': [j for j in i.fenxiang_set.all()]}
                     for i in FenBu.objects.filter(danxiang_id=pk).order_by('-create_datetime')]
        # count = 0
        # for i in fenxiangs:
        #     count+=len(i['fenxiang'])
        if not fenxiangs:
            return JsonResponse({'yAxis': [], 'r_start': [], 'r_end': []})
        max_length = max([len(i['fenxiang']) for i in fenxiangs])  # 假设最多5
        count = (max_length+1)*len(fenxiangs)*15
        yAxis = [i['fenbu_name'] for i in fenxiangs]
        r_end = {}
        fenbu_end = []
        for i in fenxiangs:
            s = {
                'name': i['fb'].name,
                'value': i['fb'].during[1],
                'start': i['fb'].during[0],
                'fx_id': i['fb'].id,
                'itemStyle':{
                    'color': '#777777',
                },
                'label': {
                    'show': True,
                    'align': 'right',
                    'position': 'right',
                    'distance': len(i['fb'].name) * 12,
                    'formatter': '{b}'
                }
            }
            fenbu_end.append(s)
        r_end[0] = fenbu_end
        for i in range(1,max_length+1):  # 遍历最大子分项工程数
            for j in fenxiangs:  # 每个分部工程一次添加分项,先加所有的第i个,然后第i+1个, 数量不够的后面就是None
                if i in r_end.keys():
                    if i <= len(j['fenxiang']):
                        fx: FenXiang = j['fenxiang'][i-1]
                        s = {
                            'name': fx.name,
                            'value': fx.during[1],
                            'start': fx.during[0],
                            'fx_id': fx.id,
                            'label': {
                                'show': True,
                                'align': 'right',
                                'distance': len(fx.name) * 12,
                                'position': 'right',
                                'formatter': '{b}'
                            }
                        }
                        r_end[i][fenxiangs.index(j)] = s
                    else:
                        r_end[i][fenxiangs.index(j)] = None
                else:
                    r_end[i] = [None for _ in fenxiangs]
                    if i < len(j['fenxiang']):
                        fx: FenXiang = j['fenxiang'][i-1]
                        s = {
                            'name': fx.name,
                            'value': fx.during[1],
                            'start': fx.during[0],
                            'fx_id': fx.id,
                            'label': {
                                'show': True,
                                'align': 'right',
                                'position': 'right',
                                'distance': len(fx.name) * 12,
                                'formatter': '{b}'
                            }
                        }
                        r_end[i][fenxiangs.index(j)] = s
                    else:
                        r_end[i][fenxiangs.index(j)] = None

        r_start = {}
        fenbu_start = []
        for i in fenxiangs:
            s = {
                'name': i['fb'].name,
                'value': i['fb'].during[0],
                'end': i['fb'].during[1],
                'fx_id': i['fb'].id,
                'itemStyle': {
                    'color': '#ffffff',
                },
            }
            fenbu_start.append(s)
        r_start[0] = fenbu_start
        for i in range(1,max_length+1):
            for j in fenxiangs:
                if i in r_start.keys():
                    if i <= len(j['fenxiang']):
                        fx: FenXiang = j['fenxiang'][i-1]
                        s = {
                            'name': fx.name,
                            'value': fx.during[0],
                            'end': fx.during[1],
                            'fenbu': fx.fenbu.name,
                        }
                        r_start[i][fenxiangs.index(j)] = s
                    else:
                        r_start[i][fenxiangs.index(j)] = None
                else:
                    r_start[i] = [None for _ in fenxiangs]
                    if i < len(j['fenxiang']):
                        fx: FenXiang = j['fenxiang'][i-1]
                        s = {
                            'name': fx.name,
                            'value': fx.during[0],
                            'end': fx.during[1],
                            'fx_id': fx.id,
                        }
                        r_start[i][fenxiangs.index(j)] = s
                    else:
                        r_start[i][fenxiangs.index(j)] = None
        print(r_start)
        return JsonResponse({'yAxis': yAxis
                                , 'r_start': r_start, 'r_end': r_end,'count':count})
