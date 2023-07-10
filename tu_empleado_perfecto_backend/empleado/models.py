from django.db import models

class Empresa(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    RUT = models.CharField(max_length=10) 
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

class Empleado(models.Model):
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre_completo = models.CharField(max_length=200)
    RUT = models.CharField(max_length=10) 
    email = models.EmailField()

    def __str__(self):
        return self.nombre_completo
