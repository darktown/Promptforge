"""
Application Settings

Central place for environment variables and configuration.
Never hardcode API keys in source code.
"""

from pydantic import BaseModel
import os


class Settings(BaseModel):
    OPENAI_API_KEY: str = os.getenv('OPENAI_API_KEY', '')
    GEMINI_API_KEY: str = os.getenv('GEMINI_API_KEY', '')
    DATABASE_URL: str = os.getenv('DATABASE_URL', '')


settings = Settings()
