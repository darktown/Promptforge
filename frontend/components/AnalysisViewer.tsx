// AnalysisViewer
// Displays backend analysis data.

interface Props {
  analysis?: any;
}

export default function AnalysisViewer({ analysis }: Props) {
  return (
    <section>
      <h2>Image Analysis</h2>
      <pre>
{JSON.stringify(analysis || { status: 'waiting...' }, null, 2)}
      </pre>
    </section>
  );
}
