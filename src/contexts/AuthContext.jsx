import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { ethers } from "ethers";
import contractABI from "../../blockchain/artifacts/contracts/SmartBank.sol/smartBank.json";
const contractAddress = "0xbBae65dA6a3cAdeb4D867eB909cF2f9d567e450F"; // replace with actual contract

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const contractFetch = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractABI.abi,
      signer
    );
    // checkOwner(contractInstance);
    setContract(contractInstance);
  }
  contractFetch();
  }, [account]);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Meta mask not installed!");
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const wallet = await provider.send("eth_requestAccounts", []);
      setAccount(wallet[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const disconnectWallet = () => setAccount(null);
  return (
    <AuthContext.Provider
      value={{ account, contract, connectWallet, disconnectWallet }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
