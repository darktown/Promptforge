// PromptForge Dashboard
// First MVP interface.

import ImageUploader from '../components/ImageUploader';
import PromptViewer from '../components/PromptViewer';
import AnalysisViewer from '../components/AnalysisViewer';

export default function HomePage() {
  return (
    <main>
      <h1>PromptForge</h1>

      <p>
        Upload an image and transform it into an optimized AI prompt.
      </p>

      <ImageUploader />

      <AnalysisViewer />

      <PromptViewer />
    </main>
  );
}
