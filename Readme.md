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

Autenticación y Seguridad
Se implementó autenticación en el backend con FastAPI.
Registro (/auth/register): crea usuarios validando email único y encriptando la contraseña con bcrypt.
Login (/auth/login): valida credenciales y genera un token JWT.
Protección de rutas: se usa Depends(get_current_user) para restringir acceso a endpoints como productos.

Seguridad:
Contraseñas encriptadas con passlib + bcrypt
Uso de tokens JWT con expiración

Problema y solución

Error con bcrypt:
module 'bcrypt' has no attribute '__about__'

Solución:

pip install bcrypt==4.0.1

Dependencias

pip install -r requirements.txt

Ejecución

Backend
uvicorn app.main:app --reload
Frontend
npm run dev

Resultado

Registro y login funcionando
Generación de token JWT
Endpoints protegidos
Contraseñas seguras

Integración de chatbot con OpenAI en GuitarWood

Se integró un chatbot en la tienda virtual GuitarWood con el propósito de responder preguntas de los usuarios relacionadas con los productos, disponibilidad y precios, utilizando la API de OpenAI desde el backend.

Tecnologías utilizadas
- FastAPI
- Python
- OpenAI API
- PostgreSQL
- React + TypeScript
- Vite

Configuración del entorno
Para habilitar la integración del chatbot, se configuró una clave de API de OpenAI en el archivo `.env` del backend. Esta clave se cargó de forma segura mediante la clase `Settings` en `config.py`.

Ejemplo de variable agregada:

```env
OPENAI_API_KEY=tu_api_key

Despliegue en AWS

Se realizó el despliegue de la aplicación GuitarWood utilizando Amazon Web Services mediante una instancia de Amazon EC2, siguiendo estos pasos:

1. Creación de la instancia EC2
Se creó una instancia virtual en AWS con sistema operativo Linux (Ubuntu).
Se configuraron reglas de seguridad (Security Groups) permitiendo acceso por:
HTTP (puerto 80)
SSH (puerto 22)

2. Conexión al servidor
Se accedió a la instancia mediante SSH desde la terminal:
ssh -i "clave.pem" ubuntu@18.188.79.104

3. Preparación del entorno
Se actualizaron los paquetes del sistema:
sudo apt update && sudo apt upgrade
Se instalaron dependencias necesarias:
PHP
Apache (servidor web)
MySQL / PostgreSQL (base de datos)

4. Configuración del servidor web
Se utilizó Apache para servir la aplicación.
Se colocó el proyecto dentro de:
/var/www/html/
Se ajustaron permisos:
sudo chown -R www-data:www-data /var/www/html

5. Despliegue del proyecto
Se subió el código desde GitHub:
git clone https://github.com/afunez90/guitar-wood-commerce
Se configuraron las variables de entorno y conexión a la base de datos.

6. Configuración de la base de datos
Se creó la base de datos en el servidor.
Se importaron las tablas necesarias.
Se verificó la conexión desde el backend (CodeIgniter 4).

7. Verificación del sistema
Se accedió desde el navegador usando la IP pública de la instancia:
http://18.188.79.104

Se comprobó que:
El frontend carga correctamente
El backend responde (CRUD funcionando)
La base de datos está conectada
8. Resultado final
La aplicación quedó desplegada en la nube, accesible públicamente, permitiendo:
Navegación del catálogo
Gestión de productos
Integración completa frontend-backend

Autor
Abner Funez
Clase Programming the Internet (CSE6042)