from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (IngresoMensualView, MetaView, TipoGastoViewSet, TipoIngresoViewSet,
                    GastoViewSet, IngresoViewSet, ObjetivoAhorroViewSet,GastoMensualView)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
router = DefaultRouter()
router.register(r'tipos-gasto', TipoGastoViewSet)
router.register(r'tipos-ingreso', TipoIngresoViewSet)
router.register(r'gastos', GastoViewSet)
router.register(r'ingresos', IngresoViewSet)
router.register(r'objetivos-ahorro', ObjetivoAhorroViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/informe-mensual/', GastoMensualView.as_view(), name='informe-mensual'),
    path('api/informe-ingreso/', IngresoMensualView.as_view(), name='informe-ingreso'),
    path('api/informe-meta/', MetaView.as_view(), name='informe-meta'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]