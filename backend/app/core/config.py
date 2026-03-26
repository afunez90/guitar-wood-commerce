from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    POSTGRES_URL: str
    MONGO_URL: str
    MONGO_DB: str
    JWT_SECRET: str
    OPENAI_API_KEY: str

    class Config:
        env_file = ".env"

settings = Settings()