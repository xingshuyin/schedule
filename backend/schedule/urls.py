from rest_framework.routers import SimpleRouter
from .views.data import DataView
from .views.schedule import shigongduan_view, shigongguocheng_view

router = SimpleRouter()
router.register(prefix='data', viewset=DataView, basename='data')
router.register(r'duan', shigongduan_view)
router.register(r'guocheng', shigongguocheng_view)
urlpatterns = []
urlpatterns += router.urls
