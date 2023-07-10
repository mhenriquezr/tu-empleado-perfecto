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
Instalar Python: 
   - Descarga e instala Python desde el sitio web oficial: [https://www.python.org/downloads/](https://www.python.org/downloads/).
   - Asegúrate de agregar Python al PATH durante la instalación.

Instalar Node.js:
   - Descarga e instala Node.js desde el sitio web oficial: [https://nodejs.org/](https://nodejs.org/).
   - Asegúrate de agregar Node.js al PATH durante la instalación.

1. En la carpeta `tu_empleado_perfecto_backend`, instala los requerimientos ejecutando el siguiente comando en la terminal:
  
```
pip install -r requirements.txt

```

2. Para iniciar el servidor Django, ejecuta el siguiente comando en la terminal:

```
python manage.py runserver
```
3. En la carpeta `tu_empleado_perfecto_frontend`, instala las dependencias ejecutando el siguiente comando en la terminal:
```
npm install
```

4. Para iniciar el servidor de desarrollo de Angular, ejecuta el siguiente comando en la terminal:

```
ng serve
```


### Ejecución en línea

Además del desarrollo local, se ha habilitado una instancia EC2 en AWS  para acceder al proyecto. Se puede acceder a las siguientes URLs:

- Frontend: [http://16.170.240.67:4200/](http://16.170.240.67:4200/)
- Backend: [http://16.170.240.67:8000/](http://16.170.240.67:8000/)


*Nota: Asegúrate de tener todas las dependencias y configuraciones correctas antes de ejecutar el programa.*

