import axios from 'axios';
import React, { useState } from 'react';

const VerifyForm = () => {
  const [did, setDid] = useState('');
  const [account, setAccount] = useState('');
  const [response, setResponse] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const [addr] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(addr);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify`, {
        userAddress: account,
        did
      });
      setResponse(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      setResponse(err.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <div>
      <h2>✅ Verify User</h2>
      <button onClick={connectWallet}>Connect Wallet</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your DID" value={did} onChange={(e) => setDid(e.target.value)} required />
        <button type="submit">Verify</button>
      </form>
      {response && <p>🔔 {response}</p>}
    </div>
  );
};

export default VerifyForm;
