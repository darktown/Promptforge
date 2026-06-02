"""
Upload API

Receives images from the frontend.
Stores them temporarily and forwards them to the AI pipeline.
"""

from fastapi import APIRouter, UploadFile

router = APIRouter(prefix='/upload', tags=['upload'])


@router.post('/')
async def upload_image(file: UploadFile):
    # TODO:
    # 1. Validate image
    # 2. Save image
    # 3. Trigger prompt generation

    return {
        'filename': file.filename,
        'status': 'uploaded'
    }
