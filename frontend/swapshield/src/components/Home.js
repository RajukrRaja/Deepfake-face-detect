import React from 'react';
import UploadVideo from '../components/VideoUpload'; // Ensure UploadVideo is correctly imported
import VideoUpload from '../components/VideoUpload';

const Home = () => {
  return (
    <div>
      <h1>Deepfake Detection</h1>
      <VideoUpload /> {/* Include the UploadVideo component in Home */}
    </div>
  );
};

export default Home;
