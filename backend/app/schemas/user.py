from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    nombre: str = Field(min_length=2)
    email: EmailStr
    password: str = Field(min_length=8)
    fecha_nacimiento: str  # YYYY-MM-DD

class UserOut(BaseModel):
    id: int
    nombre: str
    email: EmailStr
    fecha_nacimiento: str

    class Config:
        from_attributes = True