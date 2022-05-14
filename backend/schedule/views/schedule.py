from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
from dvadmin.utils.json_response import DetailResponse, SuccessResponse
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet
from ..models import Fenbu, Fenxiang
# Create your views here.


class Pager(PageNumberPagination):
    max_page_size = 1000  # 每页最大显示数
    page_query_param = 'page'  # 页码参数名
    page_size_query_param = 'limit'  # 页码数据量参数名


class fenbu_ser(CustomModelSerializer):

    class Meta:
        model = Fenbu
        fields = "__all__"
        read_only_fields = ['id']


class fenbu_view(CustomModelViewSet):
    queryset = Fenbu.objects.all()
    pagination_class = Pager
    serializer_class = fenbu_ser
    filter_backends = [filters.SearchFilter]

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
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


class fenxiang_ser(CustomModelSerializer):

    class Meta:
        model = Fenxiang
        fields = "__all__"
        read_only_fields = ['id']


class fenxiang_view(CustomModelViewSet):
    queryset = Fenxiang.objects.all()
    pagination_class = Pager
    serializer_class = fenxiang_ser
    filter_backends = [filters.SearchFilter]

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        filter_dict = request.GET.dict()
        for i in ['page', 'limit']:
            if i in filter_dict.keys():
                del filter_dict[i]
        print(filter_dict)
        queryset = queryset.filter(**filter_dict)
        queryset = self.filter_queryset(queryset)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True, request=request)
            return SuccessResponse(data=serializer.data, msg="获取成功")
        serializer = self.get_serializer(queryset, many=True, request=request)
        return SuccessResponse(data=serializer.data, msg="获取成功")
