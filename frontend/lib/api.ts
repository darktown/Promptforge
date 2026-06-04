// Central API client for PromptForge.
// All backend communication should go through this file.

const API_URL = 'http://localhost:8000';

export async function getTestPrompt() {
  const response = await fetch(`${API_URL}/generate/test`);
  return response.json();
}

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/upload/`, {
    method: 'POST',
    body: formData
  });

  return response.json();
}
