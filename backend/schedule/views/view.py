from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
from dvadmin.utils.json_response import DetailResponse, SuccessResponse
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet
from ..models import FenBu, FenXiang, GongXu, XiangMu, MaterialOut, MaterialIn, Media, Material

# Create your views here.


class Pager(PageNumberPagination):
    max_page_size = 1000  # 每页最大显示数
    page_query_param = 'page'  # 页码参数名
    page_size_query_param = 'limit'  # 页码数据量参数名


class XiangMu_ser(CustomModelSerializer):
    class Meta:
        model = XiangMu
        fields = "__all__"
        read_only_fields = ['id']


class XiangMu_view(CustomModelViewSet):
    queryset = XiangMu.objects.all()
    pagination_class = Pager
    serializer_class = XiangMu_ser
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


class FenBu_ser(CustomModelSerializer):
    class Meta:
        model = FenBu
        fields = "__all__"
        read_only_fields = ['id']


class FenBu_view(CustomModelViewSet):
    queryset = FenBu.objects.all()
    pagination_class = Pager
    serializer_class = FenBu_ser
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


class FenXiang_ser(CustomModelSerializer):
    class Meta:
        model = FenXiang
        fields = "__all__"
        read_only_fields = ['id']


class FenXiang_view(CustomModelViewSet):
    queryset = FenXiang.objects.all()
    pagination_class = Pager
    serializer_class = FenXiang_ser
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


class GongXu_ser(CustomModelSerializer):
    class Meta:
        model = FenXiang
        fields = "__all__"
        read_only_fields = ['id']


class GongXu_view(CustomModelViewSet):
    queryset = GongXu.objects.all()
    pagination_class = Pager
    serializer_class = GongXu_ser
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


class Material_ser(CustomModelSerializer):
    class Meta:
        model = Material
        fields = "__all__"
        read_only_fields = ['id']


class Material_view(CustomModelViewSet):
    queryset = Material.objects.all()
    pagination_class = Pager
    serializer_class = Material_ser
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


class MaterialIn_ser(CustomModelSerializer):
    class Meta:
        model = MaterialIn
        fields = "__all__"
        read_only_fields = ['id']


class MaterialIn_view(CustomModelViewSet):
    queryset = MaterialIn.objects.all()
    pagination_class = Pager
    serializer_class = MaterialIn_ser
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


class MaterialOut_ser(CustomModelSerializer):
    class Meta:
        model = MaterialOut
        fields = "__all__"
        read_only_fields = ['id']


class MaterialOut_view(CustomModelViewSet):
    queryset = MaterialOut.objects.all()
    pagination_class = Pager
    serializer_class = MaterialOut_ser
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
