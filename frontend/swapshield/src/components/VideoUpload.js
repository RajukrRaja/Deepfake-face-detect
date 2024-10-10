import React, { useState } from 'react';
import axios from 'axios';
import './UploadVideo.css'

const UploadVideo = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!videoFile) {
            alert("Please select a video file.");
            return;
        }

        const formData = new FormData();
        formData.append('video', videoFile);

        try {
            const response = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error("Error uploading file:", error);
            setUploadStatus('Error uploading or processing the video.');
        }
    };

    return (
        <div>
            <h2>Upload a Video for Face Swap Detection</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="video/*" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default UploadVideo;
