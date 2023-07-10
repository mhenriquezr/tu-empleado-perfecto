from rest_framework import serializers
from .models import Empresa, Empleado

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = ['nombre', 'direccion', 'RUT', 'telefono']

class EmpleadoSerializer(serializers.ModelSerializer):
    empresa = serializers.StringRelatedField(source='empresa.nombre')

    class Meta:
        model = Empleado
        fields = ['empresa', 'nombre_completo', 'RUT', 'email']
