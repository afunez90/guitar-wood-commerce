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

Próximas Mejoras
Conectar el catálogo de productos directamente con la API del backend.
Implementar autenticación de usuarios con tokens JWT.
Crear un sistema funcional de carrito de compras.
Añadir un sistema de pagos para completar el flujo de compra.

Autor
Abner Funez
Clase Programming the Internet (CSE6042)