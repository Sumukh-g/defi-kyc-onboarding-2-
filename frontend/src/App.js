import React from 'react';
import GetDIDForm from './components/GetDIDForm';
import RevokeForm from './components/RevokeForm';
import VerifyForm from './components/VerifyForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛂 Decentralized KYC System</h1>
      <VerifyForm />
      <RevokeForm />
      <GetDIDForm />
    </div>
  );
}

export default App;
