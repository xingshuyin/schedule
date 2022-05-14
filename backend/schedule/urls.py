from rest_framework.routers import SimpleRouter
from .views.data import DataView
from .views.view import XiangMu_view, FenBu_view, FenXiang_view, MaterialIn_view, GongXu_view, MaterialOut_view, Material_view

router = SimpleRouter()
router.register(prefix='data', viewset=DataView, basename='data')
router.register(r'xiangmu', XiangMu_view)
router.register(r'fenbu', FenBu_view)
router.register(r'fenxiang', FenXiang_view)
router.register(r'gongxu', GongXu_view)
router.register(r'materialin', MaterialIn_view)
router.register(r'materialout', MaterialOut_view)
router.register(r'material', Material_view)

urlpatterns = []
urlpatterns += router.urls
