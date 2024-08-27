from django.db import models
# from django.contrib.auth.models import User
# Create your models here.
from django.conf import settings
User = settings.AUTH_USER_MODEL


class TipoGasto(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class TipoIngreso(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Gasto(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_gasto = models.ForeignKey(TipoGasto, on_delete=models.CASCADE)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField()

    def __str__(self):
        return f"{self.cantidad} - {self.tipo_gasto} ({self.fecha})"

class Ingreso(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_ingreso = models.ForeignKey(TipoIngreso, on_delete=models.CASCADE)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField()

    def __str__(self):
        return f"{self.cantidad} - {self.tipo_ingreso} ({self.fecha})"

class ObjetivoAhorro(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_limite = models.DateField()

    def __str__(self):
        return self.nombre