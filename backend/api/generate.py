"""
Generate API

Receives image information and returns an AI generated prompt.
"""

from fastapi import APIRouter
from services.prompt_service import PromptService

router = APIRouter(prefix='/generate', tags=['generate'])

service = PromptService()


@router.post('/')
def generate_prompt(image_path: str):

    prompt = service.generate_prompt(image_path)

    return {
        'prompt': prompt
    }
