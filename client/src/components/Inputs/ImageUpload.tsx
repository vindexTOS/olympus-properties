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
        className={`border-2 border-dashed border-gray-300 p-4 rounded h-[120px] flex  items-center justify-center ${
          isDragActive ? 'border-blue-500' : ''
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-brand-white">
          Drag & drop images here, or click to select files
        </p>
      </div>
      <div className="flex relative  ">
        {images.slice(0, 5).map((image: any, index: number) => (
          <div
            key={index}
            className="relative flex items-center justify-center   h-[100px]"
          >
            <img
              src={image.preview}
              alt={`preview-${index}`}
              className=" w-[150px]   h-[90px] rounded"
            />

            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-white text-orange-300 border-none p-2 rounded-full cursor-pointer opacity-0 transition-opacity duration-300 hover:opacity-100"
              onClick={() => removeImage(index)}
            >
              Remove
            </button>
          </div>
        ))}
        {images.length > 5 && (
          <div className="absolute text-brand-gold font-bold text-[1.5rem] bg-brand-white right-10 p-2 w-[55px] flex items-center justify-center rounded-[50%] top-5">
            {images.length}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageUploader
