"""
Prompt Model

Represents a generated prompt.
Can later be stored in PostgreSQL.
"""

from pydantic import BaseModel


class Prompt(BaseModel):

    title: str
    prompt: str
    model: str
    created_at: str
