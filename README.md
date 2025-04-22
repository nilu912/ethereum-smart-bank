Smart Bank DApp
A decentralized banking application built on Ethereum using Solidity, Hardhat, and React. This application allows users to deposit, withdraw, and transfer Ether with the use of their Web3 wallets, providing a transparent and secure blockchain-based banking experience.

Features
Deposit Ether: Users can deposit Ether into the smart contract.

Withdraw Ether: Users can withdraw Ether from the contract to their wallet.

Transfer Ether: Users can send Ether to other users directly via the smart contract.

Balance Tracking: Displays the balance of a user and the contract.

Contract Owner: The contract owner can check the balance of the contract.

Tech Stack
Blockchain: Ethereum

Smart Contracts: Solidity

Development Framework: Hardhat

Frontend: React

Web3 Integration: Ethers.js

Testing: Hardhat, Mocha, Chai

Deployment: Sepolia Network (Ethereum testnet)

Requirements
Node.js (v16+)

npm or yarn

Alchemy API Key

MetaMask Wallet for interacting with the DApp

Installation
Step 1: Clone the repository
bash
Copy
Edit
git clone <your-repository-url>
cd smart-bank-dapp
Step 2: Install dependencies
bash
Copy
Edit
npm install
Step 3: Set up environment variables
Create a .env file in the root of your project and add the following:

env
Copy
Edit
ALCHEMY_API_URL=<your-alchemy-api-url>
PRIVATE_KEY=<your-wallet-private-key>
Replace <your-alchemy-api-url> with your Alchemy API URL and <your-wallet-private-key> with the private key of your Ethereum wallet.

Step 4: Deploy the smart contract
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network sepolia
This will deploy your smart contract to the Sepolia testnet.

Step 5: Run the DApp locally
To start the frontend app:

bash
Copy
Edit
npm start
This will run your React app on http://localhost:3000. You can now interact with the deployed contract through the Web3 interface in your browser.

Smart Contract Details
deposit()
Deposits Ether into the contract from the user's wallet.

Emits the Deposited event with the sender's address and the amount.

withdraw(uint amount)
Allows users to withdraw a specified amount of Ether from their balance in the contract.

Emits the Withdrawed event with the sender's address and the amount.

transfer(address to, uint amount)
Allows users to transfer Ether to another user's address.

Emits the Transfered event with the sender's address, receiver's address, and the amount.

getBalance()
Returns the balance of the user in the contract.

getContractBalance()
Only accessible by the contract owner.

Returns the balance of the contract itself.

License
This project is licensed under the MIT License - see the LICENSE file for details.
