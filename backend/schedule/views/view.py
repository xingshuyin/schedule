from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
from dvadmin.utils.json_response import DetailResponse, SuccessResponse
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet
from ..models import DanWei, DanXiang, FenXiang, XiangMu, MaterialOut, MaterialIn, Media, Material,FenBu,User

# Create your views here.

class Pager(PageNumberPagination):
    max_page_size = 1000  # 每页最大显示数
    page_query_param = 'page'  # 页码参数名
    page_size_query_param = 'limit'  # 页码数据量参数名


def list(self, request, *args, **kwargs):
    queryset = self.get_queryset()
    filter_dict = request.GET.dict()
    for i in ['page', 'limit']:
        if i in filter_dict.keys():
            del filter_dict[i]
    queryset = queryset.filter(**filter_dict)
    queryset = self.filter_queryset(queryset)
    page = self.paginate_queryset(queryset)
    if page is not None:
        serializer = self.get_serializer(page, many=True, request=request)
        return SuccessResponse(data=serializer.data, msg="获取成功")
    serializer = self.get_serializer(queryset, many=True, request=request)
    return SuccessResponse(data=serializer.data, msg="获取成功")

def create(self, request, *args, **kwargs):
    print(request.data)
    serializer = self.get_serializer(data=request.data, request=request)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    return DetailResponse(data=serializer.data, msg="新增成功")


def make_ser(m):
    class Meta:
        model = m
        fields = "__all__"
        read_only_fields = ['id']
    ser = type(
        'ser',
        (CustomModelSerializer,),
        {
            'Meta': Meta
        }
    )
    return ser

def make_view(m):
    print(m)
    v = type(
        'view',
        (CustomModelViewSet,),
        {
            'queryset':m.objects.all(),
            'pagination_class':Pager,
            'serializer_class':make_ser(m),
            'filter_backends':[filters.SearchFilter],
            'list':list,
            'create':create,
        }
    )
    return v

XiangMu_view = make_view(XiangMu)
DanXiang_view = make_view(DanXiang)
DanWei_view = make_view(DanWei)
FenBu_view = make_view(FenBu)
FenXiang_view = make_view(FenXiang)
Material_view = make_view(Material)
MaterialIn_view = make_view(MaterialIn)
MaterialOut_view = make_view(MaterialOut)
User_view = make_view(User)
