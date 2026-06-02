"""
Prompt Loader

Loads prompt templates from disk.
Keeping prompts outside code makes them easier to improve.
"""

from pathlib import Path


class PromptLoader:

    @staticmethod
    def load(file_path: str) -> str:
        return Path(file_path).read_text(encoding='utf-8')
