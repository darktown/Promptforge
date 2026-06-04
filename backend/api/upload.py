"""
Upload API

Stores uploaded images locally.
"""

from pathlib import Path
from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix='/upload', tags=['upload'])

UPLOAD_DIR = Path('uploads')
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post('/')
async def upload_image(file: UploadFile = File(...)):

    destination = UPLOAD_DIR / file.filename

    content = await file.read()

    destination.write_bytes(content)

    return {
        'filename': file.filename,
        'path': str(destination),
        'status': 'uploaded'
    }
