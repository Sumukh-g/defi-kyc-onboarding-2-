import axios from 'axios';
import React, { useState } from 'react';

const RevokeForm = () => {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/revoke`, {
        userAddress: address,
      });
      setResult(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      setResult(err.response?.data?.error || 'Failed to revoke.');
    }
  };

  return (
    <div>
      <h2>🚫 Revoke User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User wallet address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit">Revoke</button>
      </form>
      {result && <p>🔔 {result}</p>}
    </div>
  );
};

export default RevokeForm;
