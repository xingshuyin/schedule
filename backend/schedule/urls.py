from rest_framework.routers import SimpleRouter
from .views.data import DataView
from .views.view import FenBu_view, XiangMu_view, DanWei_view, DanXiang_view, FenXiang_view, MaterialIn_view, MaterialOut_view, Material_view

router = SimpleRouter()
router.register(prefix='data', viewset=DataView, basename='data')
router.register(r'xiangmu', XiangMu_view)
router.register(r'danwei', DanWei_view)
router.register(r'danxiang', DanXiang_view)
router.register(r'fenbu', FenBu_view)
router.register(r'fenxiang', FenXiang_view)
router.register(r'materialin', MaterialIn_view)
router.register(r'materialout', MaterialOut_view)
router.register(r'material', Material_view)

urlpatterns = []
urlpatterns += router.urls
