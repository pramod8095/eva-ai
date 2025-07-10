import React, { useEffect, useRef } from 'react';

const VideoCam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing media devices.', err);
      }
    };

    startCamera();
  }, []); 

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline width={300} height={200} style={{
        borderRadius:"20px"
      }}/>
    </div>
  );
};

export default VideoCam;
