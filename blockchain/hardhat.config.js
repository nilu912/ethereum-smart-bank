/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url:"http://127.0.0.1:8545",
      chainId: 31337,
    },
    sepolia: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY],
      timeout: 200000,
    }
  }
};
