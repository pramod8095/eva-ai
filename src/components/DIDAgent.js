import React, { useEffect } from 'react';
import { DID_API_KEY } from '../constants/constants';

const DIDAgent = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://agent.d-id.com/v2/index.js';
      script.dataset.mode = 'full';
      script.dataset.clientKey = DID_API_KEY;
      script.dataset.agentId = 'v2_agt_8FwHqkYk';
      script.dataset.name = 'did-agent';
      script.dataset.monitor = 'true';
      script.dataset.targetId = 'did-container';

      document.body.appendChild(script);
    }, 500); // wait a bit to ensure the div is rendered

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id="did-container"
      style={{
        width: '100%',
        height: '100vh',
        background: 'black',
        overflow: 'hidden',
      }}
    />
  );
};

export default DIDAgent;
