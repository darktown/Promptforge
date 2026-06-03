// GenerateButton
// Starts prompt generation.

interface Props {
  loading: boolean;
  onClick: () => void;
}

export default function GenerateButton({ loading, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {loading ? 'Generating...' : 'Generate Prompt'}
    </button>
  );
}
