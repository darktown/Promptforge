"""
Gemini Analysis Service

This layer isolates Gemini from the rest of the application.
Later we can swap providers without changing the pipeline.
"""

from ai.gemini_client import GeminiClient


class GeminiAnalysisService:

    def analyze_image(self, image_path: str):

        client = GeminiClient()

        return client.analyze_image(image_path)
