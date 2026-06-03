'use client';

// PromptForge Dashboard
// First interactive MVP.

import ImageUploader from '../components/ImageUploader';
import PromptViewer from '../components/PromptViewer';
import AnalysisViewer from '../components/AnalysisViewer';
import GenerateButton from '../components/GenerateButton';
import { usePromptGeneration } from '../hooks/usePromptGeneration';

export default function HomePage() {
  const { loading, result, generate } = usePromptGeneration();

  return (
    <main>
      <h1>PromptForge</h1>

      <p>
        Upload an image and transform it into an optimized AI prompt.
      </p>

      <ImageUploader />

      <GenerateButton
        loading={loading}
        onClick={generate}
      />

      <AnalysisViewer analysis={result?.analysis} />

      <PromptViewer prompt={result?.prompt} />
    </main>
  );
}
