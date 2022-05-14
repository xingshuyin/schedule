from rest_framework.routers import SimpleRouter
from .views.data import DataView
from .views.view import fenbu_view, fenxiang_view

router = SimpleRouter()
router.register(prefix='data', viewset=DataView, basename='data')
router.register(r'fenbu', fenbu_view)
router.register(r'fenxiang', fenxiang_view)
urlpatterns = []
urlpatterns += router.urls
