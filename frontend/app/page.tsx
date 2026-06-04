'use client';

import { useState } from 'react';

import ImageUploader from '../components/ImageUploader';
import ImagePreview from '../components/ImagePreview';
import PromptViewer from '../components/PromptViewer';
import AnalysisViewer from '../components/AnalysisViewer';
import GenerateButton from '../components/GenerateButton';
import { usePromptGeneration } from '../hooks/usePromptGeneration';
import { uploadImage } from '../lib/api';

export default function HomePage() {
  const { loading, result, generate } = usePromptGeneration();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [uploadResult, setUploadResult] = useState<any>(null);

  async function handleFileSelect(file: File) {
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));

    const result = await uploadImage(file);
    setUploadResult(result);
  }

  return (
    <main>
      <h1>PromptForge</h1>

      <p>Upload an image and transform it into an optimized AI prompt.</p>

      <ImageUploader onSelect={handleFileSelect} />

      <ImagePreview imageUrl={previewUrl} />

      {uploadResult && (
        <p>Uploaded: {uploadResult.filename}</p>
      )}

      <GenerateButton loading={loading} onClick={generate} />

      <AnalysisViewer analysis={result?.analysis} />

      <PromptViewer prompt={result?.prompt} />
    </main>
  );
}
