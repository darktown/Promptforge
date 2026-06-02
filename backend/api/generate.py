"""
Generate API
"""

from fastapi import APIRouter
from services.prompt_service import PromptService

router = APIRouter(prefix='/generate', tags=['generate'])

service = PromptService()


@router.get('/test')
def test_generation():

    result = service.generate_prompt('uploads/test.jpg')

    return result


@router.post('/')
def generate_prompt(image_path: str):

    result = service.generate_prompt(image_path)

    return result
