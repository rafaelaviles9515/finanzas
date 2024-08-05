from rest_framework import serializers
from .models import TipoGasto, TipoIngreso, Gasto, Ingreso, ObjetivoAhorro,models

class TipoGastoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoGasto
        fields = '__all__'

class TipoIngresoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoIngreso
        fields = '__all__'

class GastoSerializer(serializers.ModelSerializer):
    # nombre = serializers.StringRelatedField(source='tipogasto', read_only=True)
    nombre = serializers.SerializerMethodField()
    # print(str(tipo_gasto))
    print('holi')
    class Meta:
        model = Gasto
        # fields = '__all__'
        fields = ['id', 'usuario', 'tipo_gasto', 'nombre','cantidad', 'fecha']
    def get_nombre(self, obj):
        return obj.tipo_gasto.nombre if obj.tipo_gasto else None

class IngresoSerializer(serializers.ModelSerializer):
    nombre = serializers.SerializerMethodField()
    class Meta:
        model = Ingreso
        fields = ['id', 'usuario', 'tipo_ingreso', 'nombre','cantidad', 'fecha']
    def get_nombre(self, obj):
        return obj.tipo_ingreso.nombre if obj.tipo_ingreso else None

class ObjetivoAhorroSerializer(serializers.ModelSerializer):
    class Meta:
        model = ObjetivoAhorro
        fields = '__all__'

class InformeMensualSerializer(serializers.Serializer):
    usuario_id = serializers.IntegerField()
    year = serializers.IntegerField()
    month = serializers.IntegerField()
    total_cantidad = serializers.DecimalField(max_digits=10, decimal_places=2)

class MetaSerializer(serializers.Serializer):
    usuario_id = serializers.IntegerField()
    year = serializers.IntegerField()
    month = serializers.IntegerField()
    total_cantidad = serializers.DecimalField(max_digits=10, decimal_places=2)