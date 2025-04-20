require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.8.23",
  networks: {
    westmint: {
      url: "https://westend-asset-hub-eth-rpc.polkadot.io",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
