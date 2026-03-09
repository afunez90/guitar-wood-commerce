GuitarWood – Plataforma e-Commerce para Instrumentos Musicales

### Descripción del proyecto

GuitarWood es una plataforma e-Commerce orientada a la venta y gestión de guitarras, bajos, amplificadores y accesorios musicales.
El objetivo del proyecto es desarrollar una arquitectura moderna basada en API REST, utilizando tecnologías actuales para el backend, base de datos relacional y base de datos NoSQL.
Durante esta fase del proyecto se implementó el backend de la aplicación utilizando FastAPI, junto con un sistema CRUD completo para productos y registro de usuarios.

### Tecnologías utilizadas
Backend
Python
FastAPI
Uvicorn
SQLAlchemy
Pydantic
Base de datos
PostgreSQL (base de datos relacional)
MongoDB (eventos y auditoría)
Frontend
React
TypeScript
Vite
Herramientas
Swagger / OpenAPI
Git
GitHub
VS Code

### Arquitectura del sistema
El backend sigue una arquitectura modular organizada de la siguiente manera:
backend
│
├── app
│   ├── core
│   │   └── security.py
│   │
│   ├── db
│   │   ├── postgres.py
│   │   └── mongodb.py
│   │
│   ├── models
│   │   ├── user.py
│   │   └── product.py
│   │
│   ├── routes
│   │   ├── auth.py
│   │   └── product.py
│   │
│   ├── schemas
│   │   ├── user.py
│   │   └── product.py
│   │
│   └── main.py
│
├── venv
├── .env
└── requirements.txt

### Funcionalidades implementadas
1. Backend con FastAPI
Se creó una API REST utilizando FastAPI, que permite desarrollar servicios web de alto rendimiento con validación automática de datos.
La aplicación se ejecuta mediante:
uvicorn app.main:app --reload
2. Registro de usuarios
Se implementó un endpoint para registrar usuarios.
Endpoint
POST /auth/register
Ejemplo de solicitud
{
  "nombre": "Jassiel",
  "email": "jassiel@example.com",
  "password": "12345678",
  "fecha_nacimiento": "2000-05-10"
}
Este endpoint:
valida los datos con Pydantic
encripta la contraseña
guarda el usuario en PostgreSQL
registra un evento de auditoría en MongoDB
3. CRUD completo de productos
Se implementó un sistema completo para gestionar productos.
Endpoints disponibles
Método	Endpoint	Descripción
GET	/products	Listar productos
POST	/products	Crear producto
GET	/products/{id}	Obtener producto
PUT	/products/{id}	Actualizar producto
DELETE	/products/{id}	Eliminar producto
Ejemplo de creación de producto
{
  "nombre": "Fender Stratocaster",
  "descripcion": "Guitarra eléctrica color sunburst",
  "precio": 899.99,
  "stock": 5,
  "categoria": "Guitarras"
}
4. Documentación automática con Swagger
FastAPI genera automáticamente documentación interactiva de la API.
Disponible en:
http://127.0.0.1:8000/docs
Desde esta interfaz es posible:
probar endpoints
enviar datos JSON
visualizar respuestas
depurar la API
5. Configuración de variables de entorno
El sistema utiliza un archivo .env para manejar las conexiones a las bases de datos.
Ejemplo:
POSTGRES_URL=postgresql+psycopg2://postgres:password@localhost:5432/guitarwood
MONGO_URL=mongodb://localhost:27017
MONGO_DB=guitarwood
JWT_SECRET=CAMBIA_ESTE_SECRETO
6. Conexión con PostgreSQL
PostgreSQL se utiliza para almacenar:
usuarios
productos
información estructurada del sistema
Se usa SQLAlchemy ORM para manejar las operaciones de base de datos.
7. Uso de MongoDB
MongoDB se utiliza para almacenar:
eventos de auditoría
registros de actividad
datos no estructurados
Ejemplo de evento guardado:
USER_REGISTERED
Instalación del proyecto
1. Clonar el repositorio
git clone https://github.com/tu_usuario/guitarwood.git
2. Entrar al proyecto
cd guitarwood/backend
3. Crear entorno virtual
python3 -m venv venv
source venv/bin/activate
4. Instalar dependencias
pip install -r requirements.txt
5. Ejecutar el servidor
uvicorn app.main:app --reload
6. Acceder a la documentación
http://127.0.0.1:8000/docs

### Estado actual del proyecto
Actualmente el sistema incluye:
API REST funcional
Registro de usuarios
CRUD completo de productos
PostgreSQL configurado
MongoDB integrado
Documentación Swagger
Próximas mejoras
Autenticación con JWT
Sistema de login
Carrito de compras
Gestión de pedidos
Subida de imágenes de productos
Integración completa con React

### Autor
Proyecto desarrollado por:
Jassiel
Proyecto académico para la implementación de una plataforma e-Commerce moderna.