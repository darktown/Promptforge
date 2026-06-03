// React hook for prompt generation.
// Keeps API logic separate from UI components.

import { useState } from 'react';
import { getTestPrompt } from '../lib/api';

export function usePromptGeneration() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function generate() {
    setLoading(true);

    try {
      const data = await getTestPrompt();
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    result,
    generate
  };
}
