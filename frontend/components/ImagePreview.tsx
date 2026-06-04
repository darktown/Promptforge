// ImagePreview
// Shows a preview of the selected image.

interface Props {
  imageUrl?: string;
}

export default function ImagePreview({ imageUrl }: Props) {
  return (
    <section>
      <h2>Image Preview</h2>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt='Preview'
          style={{ maxWidth: '400px' }}
        />
      ) : (
        <p>No image selected yet.</p>
      )}
    </section>
  );
}
