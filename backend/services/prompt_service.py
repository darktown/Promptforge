"""
Prompt Service

Public entry point used by API routes.
"""

from services.prompt_pipeline import PromptPipeline


class PromptService:

    def generate_prompt(self, image_path: str):

        pipeline = PromptPipeline()

        result = pipeline.run(image_path)

        return result
