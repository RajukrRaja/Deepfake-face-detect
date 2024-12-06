import React, { useState, useEffect } from 'react';
import { FaVideo, FaMusic, FaImage } from 'react-icons/fa';
import './Detect.css';

const Detect = () => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const allowedTypes = {
    video: ['video/mp4', 'video/avi', 'video/quicktime'],
    image: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'],
    audio: ['audio/mpeg', 'audio/wav', 'audio/flac'],
  };
  const maxSize = 10 * 1024 * 1024; // 10 MB
  const serverUrl = 'http://localhost:5000'; // Your backend URL

  // Function to handle file upload
  const handleFileUpload = async (file, type) => {
    if (!file) return;

    setFileURL('');
    setError('');
    setIsValid(false);
    setLoading(true);

    const { type: fileType, size } = file;

    // Check if the file type is allowed
    if (!allowedTypes[type].includes(fileType)) {
      setError(`Unsupported ${type} file type`);
      setLoading(false);
      return;
    }

    // Check if the file size exceeds the limit
    if (size > maxSize) {
      setError('File size exceeds the limit (10MB)');
      setLoading(false);
      return;
    }

    setFile(file);
    setFileURL(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${serverUrl}/upload/${type}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsValid(true);
        setError('');
      } else {
        const errorData = await response.text();
        try {
          const jsonError = JSON.parse(errorData);
          setError(jsonError.message || 'Failed to upload file');
        } catch {
          setError(errorData || 'An error occurred while uploading');
        }
      }
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Clean up the object URL when the component is unmounted
  useEffect(() => {
    return () => {
      if (fileURL) {
        URL.revokeObjectURL(fileURL);
      }
    };
  }, [fileURL]);

  return (
    <div className="container">
      <h2>Upload Media</h2>
      <div className="upload-sections">
        {/* Video Upload */}
        <div className="upload-section">
          <FaVideo className="upload-icon" size={50} color="#ff6347" />
          <p>Upload Video</p>
          <input
            type="file"
            accept=".mp4,.avi,.mov"
            id="video-upload"
            onChange={(event) => handleFileUpload(event.target.files[0], 'video')}
            style={{ display: 'none' }}
          />
          <label htmlFor="video-upload" className="upload-button">
            Upload Video
          </label>
        </div>

        {/* Audio Upload */}
        <div className="upload-section">
          <FaMusic className="upload-icon" size={50} color="#6a5acd" />
          <p>Upload Audio</p>
          <input
            type="file"
            accept=".mp3,.wav,.flac"
            id="audio-upload"
            onChange={(event) => handleFileUpload(event.target.files[0], 'audio')}
            style={{ display: 'none' }}
          />
          <label htmlFor="audio-upload" className="upload-button">
            Upload Audio
          </label>
        </div>

        {/* Image Upload */}
        <div className="upload-section">
          <FaImage className="upload-icon" size={50} color="#4682b4" />
          <p>Upload Image</p>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.gif"
            id="image-upload"
            onChange={(event) => handleFileUpload(event.target.files[0], 'image')}
            style={{ display: 'none' }}
          />
          <label htmlFor="image-upload" className="upload-button">
            Upload Image
          </label>
        </div>
      </div>

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {isValid && <p className="success">File uploaded successfully</p>}

      {fileURL && (
        <div className="preview-container">
          <div className="media-preview-wrapper">
            {file && file.type.startsWith('video') && (
              <video controls src={fileURL} className="media-preview" />
            )}
            {file && file.type.startsWith('image') && (
              <img src={fileURL} alt="Preview" className="media-preview" />
            )}
            {file && file.type.startsWith('audio') && (
              <audio controls src={fileURL} className="media-preview" />
            )}
          </div>
          <button className="detect-button">Detect</button>
        </div>
      )}
    </div>
  );
};

export default Detect;
