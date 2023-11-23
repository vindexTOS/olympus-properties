import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const ImageUploader = () => {
  const [images, setImages] = useState<any>([])

  const onDrop = useCallback((acceptedFiles: any) => {
    // Handle the uploaded files
    const newImages = acceptedFiles.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    )
    setImages((prevImages: any) => [...prevImages, ...newImages])
  }, [])

  const removeImage = (index: number) => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)
    setImages(updatedImages)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select files</p>
      </div>
      <div className="image-gallery">
        {images.map((image: any, index: number) => (
          <div key={index} className="image-preview">
            <img src={image.preview} alt={`preview-${index}`} />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageUploader
