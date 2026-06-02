"""
Image Analysis Service

Current MVP uses mock data.
Later Gemini Vision will be called here.
"""


class ImageAnalysisService:

    def analyze(self, image_path: str):

        return {
            'subject': 'adult woman',
            'style': 'fashion editorial',
            'lighting': 'golden hour',
            'environment': 'coastline',
            'image_path': image_path
        }
