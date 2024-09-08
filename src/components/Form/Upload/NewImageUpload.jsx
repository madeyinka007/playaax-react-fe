import React, { useState } from "react";
import { mediaUploader } from "./UploadImage";

// import { uploadImage, mediaUploader } from "./cloudinary";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const uploadedImage = await mediaUploader(file);
      setUploadedImage(uploadedImage);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <button onClick={handleUpload}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      )}
      {uploadedImage && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={uploadedImage.original} alt="Uploaded Image" />
          <h2>Thumbnails</h2>
          {Object.entries(uploadedImage).map(([label, url]) => (
            <div key={label}>
              <h3>{label}</h3>
              <img src={url} alt={label} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
