from fastapi import APIRouter, Depends
from pydantic import BaseModel
from openai import OpenAI
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.core.config import settings
from app.db.postgres import get_db
from app.models.product import Product

router = APIRouter(tags=["chatbot"])

client = OpenAI(api_key=settings.OPENAI_API_KEY)


class ChatRequest(BaseModel):
    mensaje: str


@router.post("/chatbot")
def chatbot(data: ChatRequest, db: Session = Depends(get_db)):
    try:
        productos = db.execute(select(Product)).scalars().all()

        if not productos:
            return {
                "respuesta": "No hay productos registrados en este momento en GuitarWood."
            }

        contexto_productos = "\n".join([
            f"- Nombre: {getattr(p, 'name', getattr(p, 'nombre', 'Sin nombre'))} | "
            f"Precio: {getattr(p, 'price', getattr(p, 'precio', 'Sin precio'))} | "
            f"Stock: {getattr(p, 'stock', 'No definido')} | "
            f"Descripción: {getattr(p, 'description', getattr(p, 'descripcion', 'Sin descripción'))}"
            for p in productos
        ])

        prompt = f"""
Eres el asistente virtual de GuitarWood, una tienda en línea de guitarras y accesorios.

Tu tarea es responder únicamente con base en la información de productos proporcionada.
Reglas:
- Responde de forma breve, clara y útil.
- Si preguntan por precios, productos o disponibilidad, usa solo la información dada.
- Si no existe información suficiente, dilo claramente.
- No inventes productos ni precios.
- Mantén un tono amable y profesional.

Productos disponibles:
{contexto_productos}

Pregunta del usuario:
{data.mensaje}
"""

        response = client.responses.create(
            model="gpt-5",
            input=prompt
        )

        texto = response.output[0].content[0].text

        return {"respuesta": texto}

    except Exception as e:
        return {"error": str(e)}