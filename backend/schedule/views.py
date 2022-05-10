from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination
from dvadmin.utils.json_response import SuccessResponse
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet
from .models import shigongguocheng
# Create your views here.


class Pager(PageNumberPagination):
    max_page_size = 1000  # 每页最大显示数
    page_query_param = 'page'  # 页码参数名
    page_size_query_param = 'limit'  # 页码数据量参数名


class shigongguocheng_ser(CustomModelSerializer):
    class Meta:
        model = shigongguocheng
        fields = "__all__"
        read_only_fields = ['id'] 

class shigongguocheng_view(CustomModelViewSet):
    queryset = shigongguocheng.objects.all()
    pagination_class = Pager
    serializer_class = shigongguocheng_ser
    
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True, request=request)
            return SuccessResponse(data=serializer.data, msg="获取成功")
        serializer = self.get_serializer(queryset, many=True, request=request)
        return SuccessResponse(data=serializer.data, msg="获取成功")
