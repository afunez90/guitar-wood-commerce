from fastapi import FastAPI
from app.routes import auth, product
from app.db.postgres import Base, engine

app = FastAPI()

# Crear tablas automáticamente
Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(product.router)