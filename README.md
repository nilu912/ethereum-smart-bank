# Smart Bank DApp

**Smart Bank** is a decentralized application (DApp) built on the Ethereum blockchain using Solidity, Hardhat, and React. It enables users to perform basic banking operations like depositing, withdrawing, and transferring Ether directly within the application. The app is secured by smart contracts, which ensures transparency and eliminates intermediaries, providing users full control over their funds.

---

## Features

- **Deposit Ether**: Users can deposit Ether into their Smart Bank account.
- **Withdraw Ether**: Withdraw funds from the Smart Bank account to your wallet.
- **Transfer Ether**: Send Ether to another user’s Smart Bank account.
- **Balance Tracking**: Keep track of your balance within the Smart Bank contract.
- **Contract Owner Access**: The contract owner can view the contract's total balance.

---

## Tech Stack

- **Blockchain Platform**: Ethereum
- **Smart Contracts**: Solidity
- **Development Framework**: Hardhat (for smart contract deployment and testing)
- **Frontend**: React.js
- **Web3 Integration**: Ethers.js (for blockchain interaction)
- **Testing**: Mocha, Chai (for smart contract testing)
- **Deployment Network**: Sepolia Testnet (Ethereum testnet)

---

## Requirements

To run and deploy the Smart Bank DApp, you will need the following:

- **Node.js (v16 or later)**: Ensure that Node.js is installed.
- **npm or yarn**: Package managers to manage dependencies.
- **Alchemy Account**: Alchemy API URL for interacting with Ethereum testnets.
- **MetaMask Wallet**: To interact with the DApp through your browser.
- **Private Key**: Private key of your Ethereum wallet for deploying the contract.

---

## Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd smart-bank-dapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file at the root of your project and add the following configuration:

```env
ALCHEMY_API_URL=<your-alchemy-api-url>
PRIVATE_KEY=<your-wallet-private-key>
```

### 4. Deploy the Smart Contract

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 5. Run the DApp Locally

```bash
npm start
```

The app will be available at `http://localhost:3000`

---

## Smart Contract Details

### `deposit()`
- Deposits Ether into the user's balance.

### `withdraw(uint amount)`
- Withdraws Ether from the user's balance.

### `transfer(address to, uint amount)`
- Transfers Ether from sender to another user's account.

### `getBalance()`
- Returns the caller's current balance.

### `getContractBalance()`
- Returns the total balance of the contract (only accessible by the owner).

### `receive()`
- Accepts Ether sent directly to the contract.

### `fallback()`
- Reverts if an unknown function is called.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

Feel free to fork this project, submit issues, or create pull requests for improvements and bug fixes. Contributions are always welcome!

---

## Contact

- **Email**: <your-email@example.com>
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

## Screenshots (Optional)

```markdown
![App Screenshot](url-to-image.jpg)
```

---

## Badges (Optional)

```markdown
![Build Status](https://img.shields.io/badge/build-passing-green)
![License](https://img.shields.io/badge/license-MIT-blue)
```

---

## Notes

You can also add other sections like **Roadmap**, **Changelog**, or **Acknowledgments** if needed.
