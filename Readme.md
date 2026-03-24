GuitarWood – Plataforma de eCommerce para Guitarras y Accesorios

Descripción del Proyecto

GuitarWood es una plataforma web de comercio electrónico diseñada para la venta de guitarras eléctricas, amplificadores y accesorios musicales. El proyecto integra un frontend basado en HTML, CSS y React con un backend desarrollado en Python utilizando FastAPI.
El objetivo del sistema es ofrecer una experiencia sencilla para explorar productos musicales, visualizar detalles de cada artículo y permitir el registro de usuarios dentro de la plataforma.
Este proyecto fue desarrollado como parte de la asignatura Programming the Internet (CSE6042).

Tecnologías Utilizadas

Frontend
HTML5
CSS3
React
TypeScript
Vite
Backend
Python
FastAPI
SQLAlchemy
PostgreSQL
MongoDB

Herramientas de Desarrollo
Git
GitHub
Visual Studio Code
Uvicorn
Node.js

Arquitectura del Proyecto
El proyecto está dividido en tres partes principales:

Frontend estático
Contiene las páginas principales del sitio como la página de inicio, catálogo de productos, carrito y vista individual de productos.
Aplicación React
Se utiliza para el formulario dinámico de creación de cuentas con validaciones modernas utilizando React y TypeScript.
Backend con FastAPI
Proporciona una API REST para gestionar usuarios y productos, además de conectarse con bases de datos SQL y NoSQL.

Estructura del Proyecto
GUITARWOOD-UI
assets
css
styles.css
img
backend
app
core
db
models
routes
schemas
main.py
requirements.txt
catalog.html
cart.html
index.html
login.html
product.html
cuenta-react

Funcionalidades Implementadas

Página principal con sección hero y productos destacados.
Catálogo de productos que muestra múltiples artículos organizados en una cuadrícula.
Visualización de productos individuales.
Sistema de registro de usuarios mediante API REST.
Validación de formularios utilizando React y TypeScript.
Backend desarrollado con FastAPI para gestionar usuarios y productos.
Base de datos PostgreSQL para almacenamiento principal.
MongoDB utilizado para registrar eventos de auditoría.

API Backend
El backend expone varios endpoints para gestionar el sistema.
Registro de usuario
POST /auth/register
Permite crear nuevos usuarios dentro de la plataforma.
Ejemplo de solicitud
{
"nombre": "Carlos Perez",
"email": "carlos@test.com",
"password": "12345678",
"fecha_nacimiento": "1995-08-15"
}
Listado de productos
GET /products
Devuelve el catálogo de productos disponibles.
Creación de productos
POST /products
Permite agregar nuevos productos al sistema.
Ejecución del Proyecto
Clonar el repositorio
git clone https://github.com/afunez90/guitarwood-account-validator.git
Entrar en el proyecto
cd guitarwood-account-validator
Instalar dependencias del backend
pip install -r backend/requirements.txt
Ejecutar el servidor backend
uvicorn app.main:app --reload
El backend estará disponible en
http://127.0.0.1:8000
La documentación interactiva de la API puede consultarse en
http://127.0.0.1:8000/docs

Desarrollo del Frontend

El frontend estático puede ejecutarse con Live Server dentro de Visual Studio Code.
Abrir el archivo index.html y ejecutar Live Server para visualizar la tienda.

Desafíos Encontrados
Integración entre frontend y backend.
Configuración de PostgreSQL para el almacenamiento de usuarios.
Creación y manejo de rutas en FastAPI.
Configuración de React con TypeScript para validación de formularios.
Gestión del repositorio Git con múltiples tecnologías dentro del mismo proyecto.


Despliegue en AWS EC2

Se desplegó la plataforma GuitarWood en una instancia EC2 de AWS utilizando Amazon Linux 2023 como sistema operativo y una instancia tipo t3.micro. Se configuraron los puertos necesarios en el Security Group (22 para SSH, 80 para HTTP y 443 para HTTPS), permitiendo el acceso remoto y la visualización de la aplicación desde internet.
La conexión a la instancia se realizó mediante SSH usando una clave privada (.pem).
Configuración del servidor
Se instaló y configuró el servidor web Apache, junto con PHP y sus extensiones necesarias para ejecutar la aplicación:
Apache (httpd)
PHP
Git
MariaDB

El proyecto fue clonado desde GitHub y copiado al directorio público /var/www/html/, permitiendo su acceso desde:
http://18.188.79.104

Configuración de la base de datos

Se instaló MariaDB en la instancia EC2 y se configuró una base de datos llamada guitarwood, junto con un usuario con permisos completos.
Se creó una tabla de productos y se insertaron datos de prueba para validar el funcionamiento.
Integración con la aplicación
Se implementó un script en PHP (productos.php) que realiza una consulta a la base de datos y muestra los productos almacenados, confirmando la conexión entre la aplicación y MariaDB.

Acceso de prueba:
http://18.188.79.104/productos.php

Evidencias
Instancia EC2 en ejecución
Conexión SSH desde terminal
Servidor Apache funcionando
Aplicación desplegada en navegador
Consulta a base de datos desde PHP

Desafíos y soluciones

Error al ejecutar comandos en MariaDB → se corrigió usando la terminal adecuada
Problemas con archivos no encontrados → se ajustaron rutas en /var/www/html/
Fallas de conexión SSH → se corrigieron permisos del archivo .pem
Integración inicial sin base de datos → se implementó conexión mediante PHP

Acceso al proyecto

Aplicación en línea:
http://18.188.79.104
Repositorio en GitHub:
https://github.com/afunez90/guitar-wood-commerce

Conclusión
Se logró desplegar exitosamente la aplicación en AWS EC2, configurando el servidor web, la base de datos y validando la conexión funcional entre ambos, cumpliendo todos los requerimientos del proyecto.

Autor
Abner Funez
Clase Programming the Internet (CSE6042)
