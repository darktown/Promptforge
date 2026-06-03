// Central API client for PromptForge.
// All backend communication should go through this file.

const API_URL = 'http://localhost:8000';

export async function getTestPrompt() {
  const response = await fetch(`${API_URL}/generate/test`);
  return response.json();
}
