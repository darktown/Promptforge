'use client';

// ImageUploader
// Emits the selected file to the parent component.

interface Props {
  onSelect?: (file: File) => void;
}

export default function ImageUploader({ onSelect }: Props) {
  return (
    <input
      type='file'
      accept='image/*'
      onChange={(event) => {
        const file = event.target.files?.[0];

        if (file && onSelect) {
          onSelect(file);
        }
      }}
    />
  );
}
