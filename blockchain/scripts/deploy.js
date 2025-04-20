const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const KYCVerifier = await hre.ethers.getContractFactory("KYCVerifier");
  const kyc = await KYCVerifier.deploy(process.env.ADMIN_ADDRESS);
  await kyc.deployed();
  console.log(`✅  KYCVerifier deployed to: ${kyc.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});