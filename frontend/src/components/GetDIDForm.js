import axios from 'axios';
import React, { useState } from 'react';

const GetDIDForm = () => {
  const [address, setAddress] = useState('');
  const [did, setDID] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getDID`, {
        userAddress: address,
      });
      setDID(res.data.did || 'No DID found');
    } catch (err) {
      setDID(err.response?.data?.error || 'Error fetching DID');
    }
  };

  return (
    <div>
      <h2>🔍 Get User DID</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Wallet address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit">Get DID</button>
      </form>
      {did && <p>🆔 {did}</p>}
    </div>
  );
};

export default GetDIDForm;
