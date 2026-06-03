// PromptViewer
// Displays generated prompt data.

interface Props {
  prompt?: string;
}

export default function PromptViewer({ prompt }: Props) {
  return (
    <section>
      <h2>Generated Prompt</h2>
      <textarea
        rows={10}
        value={prompt || 'Your generated prompt will appear here.'}
        readOnly
      />
    </section>
  );
}
