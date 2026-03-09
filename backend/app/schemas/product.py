from pydantic import BaseModel

class ProductCreate(BaseModel):
    nombre: str
    descripcion: str
    precio: float
    stock: int
    categoria: str

class ProductOut(BaseModel):
    id: int
    nombre: str
    descripcion: str
    precio: float
    stock: int
    categoria: str

    class Config:
        from_attributes = True