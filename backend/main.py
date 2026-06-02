"""
PromptForge Backend Entry Point

This file starts the API server.
Future endpoints:
- image upload
- prompt generation
- prompt enhancement
"""

from fastapi import FastAPI

app = FastAPI(title='PromptForge API')


@app.get('/')
def root():
    return {'status': 'PromptForge backend running'}
