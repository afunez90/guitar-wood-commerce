from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from datetime import datetime

from app.db.postgres import get_db
from app.db.mongodb import mongo_db
from app.models.user import User
from app.schemas.user import UserCreate, UserOut
from app.core.security import hash_password

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=UserOut)
async def register(payload: UserCreate, db: Session = Depends(get_db)):
    existing = db.execute(select(User).where(User.email == payload.email)).scalar_one_or_none()
    if existing:
        raise HTTPException(status_code=400, detail="Email ya registrado")

    user = User(
        nombre=payload.nombre,
        email=payload.email,
        password_hash=hash_password(payload.password),
        fecha_nacimiento=payload.fecha_nacimiento
    )
    db.add(user)
    db.commit()
    db.refresh(user)

# Log a Mongo (auditoría / validación)
# await mongo_db["audit_events"].insert_one({
#     "event": "USER_REGISTERED",
#     "email": user.email,
#     "timestamp": datetime.utcnow().isoformat()
# })

    return user