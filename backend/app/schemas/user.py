from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    nombre: str
    email: EmailStr
    password: str
    fecha_nacimiento: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: int
    nombre: str
    email: EmailStr
    fecha_nacimiento: str

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str