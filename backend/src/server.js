import dotenv from 'dotenv';
import { ethers } from 'ethers';
import express from 'express';

import KYCVerifier from '../KYCVerifier.json' assert { type: 'json' };




dotenv.config();

const app = express();
app.use(express.json());

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.ADMIN_PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, KYCVerifier.abi, wallet);


app.get('/', (req, res) => {
  res.send('✅ KYC Backend is running');
});

app.post('/verify', async (req, res) => {
  const { userAddress, did } = req.body;

  if (!userAddress || !did) {
    return res.status(400).json({ error: 'Missing userAddress or DID' });
  }

  try {
    const tx = await contract.verifyUser(userAddress, did);
    await tx.wait();
    res.status(200).json({ success: true, message: 'User verified', txHash: tx.hash });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Verification failed', details: err.reason || err.message });
  }
});

app.post('/revoke', async (req, res) => {
  const { userAddress } = req.body;

  if (!userAddress) {
    return res.status(400).json({ error: 'Missing userAddress' });
  }

  try {
    const tx = await contract.revokeUser(userAddress);
    await tx.wait();
    res.status(200).json({ success: true, message: 'User revoked', txHash: tx.hash });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Revocation failed', details: err.reason || err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
