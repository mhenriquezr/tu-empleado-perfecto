# Documentación

## Backend (Python, Django y Django Rest Framework)

Se comenzó construyendo una API REST utilizando Django y Django Rest Framework. Se crearon dos modelos: `Empresa` y `Empleado`, los cuales están relacionados a través de un ForeignKey.

El modelo `Empresa` tiene los siguientes campos: nombre, dirección, RUT (identificador único) y teléfono.

El modelo `Empleado` tiene los siguientes campos: empresa (ForeignKey que apunta a `Empresa`), nombre completo, RUT (identificador único) y correo electrónico.

Luego, se implementaron dos Serializers: `EmpresaSerializer` y `EmpleadoSerializer`, los cuales ayudan a convertir entre objetos Django y datos JSON.

Finalmente, se crearon vistas para manejar las solicitudes GET y POST para `Empresa` y `Empleado`.

## Frontend (Angular)

En el frontend, se creó un servicio llamado `ApiService` que se encarga de manejar todas las llamadas a la API REST de Django. Este servicio tiene funciones para obtener todas las empresas, obtener todos los empleados, crear una nueva empresa y crear un nuevo empleado.

Luego, se implementaron dos componentes: `EmpresasComponent` y `EmpleadosComponent`, los cuales utilizan `ApiService` para interactuar con la API. `EmpresasComponent` muestra todas las empresas y proporciona un formulario para crear nuevas empresas. `EmpleadosComponent` muestra todos los empleados, proporciona un formulario para crear nuevos empleados y tiene funcionalidad para filtrar empleados por nombre o empresa.

## Ejecución local

Para ejecutar este programa localmente, es necesario tener instalados Python, Django, Django Rest Framework y Node.js en tu computadora. A continuación, se detallan los pasos:

1. Para iniciar el servidor Django, ejecuta el siguiente comando en la terminal:

```
python manage.py runserver
```


2. Para iniciar el servidor de desarrollo de Angular, ejecuta el siguiente comando en la terminal:

```
ng serve
```
