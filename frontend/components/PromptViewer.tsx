// PromptViewer
// Displays the generated prompt.
// Later this will receive real API data.

export default function PromptViewer() {
  return (
    <section>
      <h2>Generated Prompt</h2>
      <textarea
        rows={10}
        defaultValue='Your generated prompt will appear here.'
      />
    </section>
  );
}
