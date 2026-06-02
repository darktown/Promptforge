// ImageUploader
// Handles image selection from the user's device.
// Later this component will upload files to the backend.

export default function ImageUploader() {
  return (
    <input
      type="file"
      accept="image/*"
    />
  );
}
