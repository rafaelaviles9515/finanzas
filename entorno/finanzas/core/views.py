import json
from django.shortcuts import render
from django.db import models
from django.db import connection
from django.db.models import Sum
from django.db.models.functions import ExtractYear, ExtractMonth
from rest_framework import viewsets, permissions
from .models import TipoGasto, TipoIngreso, Gasto, Ingreso, ObjetivoAhorro
from .serializers import (InformeMensualSerializer, TipoGastoSerializer, TipoIngresoSerializer,
                          GastoSerializer, IngresoSerializer, ObjetivoAhorroSerializer,MetaSerializer)
from rest_framework.views import APIView
from rest_framework.response import Response

class TipoGastoViewSet(viewsets.ModelViewSet):
    queryset = TipoGasto.objects.all()
    serializer_class = TipoGastoSerializer

class TipoIngresoViewSet(viewsets.ModelViewSet):
    queryset = TipoIngreso.objects.all()
    serializer_class = TipoIngresoSerializer

class GastoViewSet(viewsets.ModelViewSet):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer
    # permission_classes = [permissions.IsAuthenticated]

    # def perform_create(self, serializer):
    #     serializer.save(usuario=self.request.user)

class IngresoViewSet(viewsets.ModelViewSet):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer
    # permission_classes = [permissions.IsAuthenticated]

    # def perform_create(self, serializer):
    #     serializer.save(usuario=self.request.user)

class ObjetivoAhorroViewSet(viewsets.ModelViewSet):
    queryset = ObjetivoAhorro.objects.all()
    serializer_class = ObjetivoAhorroSerializer

# class ResumenMensualViewSet(viewsets.ModelViewSet):
#     queryset = resultados = (
#         Gasto.objects
#         .annotate(year=ExtractYear('fecha'), month=ExtractMonth('fecha'))
#         .filter(year=2024,month=8)
#         .values('usuario_id', 'year', 'month')
#         .annotate(total_cantidad=Sum('cantidad'))
#         .order_by('usuario_id', 'year', 'month')
#     )
#     serializer_class = InformeMensualSerializer

class GastoMensualView(APIView):
    def get(self, request):
        year = int(request.GET.get('year'))
        # month = int(request.GET.get('month'))
        usuario = int(request.GET.get('usuario'))
        resultados = (
            Gasto.objects
            .annotate(year=ExtractYear('fecha'), month=ExtractMonth('fecha'))
            .filter(year=year, usuario_id=usuario)
            .values('usuario_id', 'year', 'month')
            .annotate(total_cantidad=Sum('cantidad'))
            .order_by('usuario_id', 'year', 'month')
        )

        serializer = InformeMensualSerializer(resultados, many=True)
        return Response(serializer.data)

class IngresoMensualView(APIView):
    def get(self, request):
        year = int(request.GET.get('year'))
        # month = int(request.GET.get('month'))
        usuario = int(request.GET.get('usuario'))
        resultados = (
            Ingreso.objects
            .annotate(year=ExtractYear('fecha'), month=ExtractMonth('fecha'))
            .filter(year=year, usuario_id=usuario)
            .values('usuario_id', 'year', 'month')
            .annotate(total_cantidad=Sum('cantidad'))
            .order_by('usuario_id', 'year', 'month')
        )

        serializer = InformeMensualSerializer(resultados, many=True)
        return Response(serializer.data)

class MetaView(APIView):
    def get(self, request):
        year = int(request.GET.get('year'))
        # month = int(request.GET.get('month'))
        usuario = int(request.GET.get('usuario'))
        resultados = (
            ObjetivoAhorro.objects
            .annotate(year=ExtractYear('fecha_limite'), month=ExtractMonth('fecha_limite'))
            .filter(year=year, usuario_id=usuario)
            .values('usuario_id', 'year', 'month')
            .annotate(total_cantidad=Sum('cantidad'))
            .order_by('usuario_id', 'year', 'month')
        )

        serializer = MetaSerializer(resultados, many=True)
        return Response(serializer.data)




