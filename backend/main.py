"""
PromptForge Backend Entry Point

First MVP API.
"""

from fastapi import FastAPI
from api.upload import router as upload_router
from api.generate import router as generate_router

app = FastAPI(title='PromptForge API')

app.include_router(upload_router)
app.include_router(generate_router)


@app.get('/')
def root():
    return {
        'status': 'PromptForge backend running',
        'version': '0.1.0'
    }
