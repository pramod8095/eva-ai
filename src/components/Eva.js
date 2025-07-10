import React, { useEffect, useRef } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  didContainer: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  videoCam: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 200,
    height: 150,
    borderRadius: 2,
    border: '2px solid white',
    zIndex: 3,
  },
  questionCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 340,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    borderRadius: 2,
    zIndex: 3,
  },
};


const DIDInterview = () => {
  const videoRef = useRef();

  // Load D-ID Script
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://agent.d-id.com/v2/index.js';
    script.dataset.mode = 'full';
    script.dataset.clientKey =
      'Z29vZ2xlLW9hdXRoMnwxMDc0NDQwMDU5Mjg3MTE5MzI3OTM6eWdScjYyMTNqNExORl9kTFhscTI0';
    script.dataset.agentId = 'v2_agt_8FwHqkYk';
    script.dataset.name = 'did-agent';
    script.dataset.monitor = 'true';
    script.dataset.targetId = 'did-container';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Load Webcam
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
    <Box sx={styles.container}>
      {/* DID Agent Container */}
      <Box id="did-container" sx={styles.didContainer} />

      {/* Webcam Video Box */}
      <Box component="video"
        ref={videoRef}
        autoPlay
        playsInline
        sx={styles.videoCam}
      />

      {/* Question Card */}
      <Card sx={styles.questionCard}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
             Interview Question
          </Typography>
          <Typography variant="body1">
            Can you briefly explain your most recent project and the challenges you faced?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DIDInterview;
