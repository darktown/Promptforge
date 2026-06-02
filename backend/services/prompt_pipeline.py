"""
Prompt Pipeline

Coordinates the full prompt generation process.
"""

from services.image_analysis_service import ImageAnalysisService


class PromptPipeline:

    def run(self, image_path: str):

        analysis_service = ImageAnalysisService()

        analysis = analysis_service.analyze(image_path)

        prompt = (
            f"Ultra realistic {analysis['style']}, "
            f"{analysis['subject']}, "
            f"{analysis['lighting']} lighting, "
            f"{analysis['environment']}, "
            f"high detail, professional photography"
        )

        return {
            'analysis': analysis,
            'prompt': prompt
        }
