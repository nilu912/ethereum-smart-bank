import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  formatEther,
  parseEther,
  parseUnits,
  formatUnits,
  getAddress,
} from "ethers";
import { ethers, isAddress } from "ethers";
import { useAuth } from "../contexts/AuthContext";

export default function User() {
  const { account, contract, disconnectWallet } = useAuth();
  // const naviget = useNavigate();
  const [balance, setBalance] = useState("0");
  const [amount, setAmount] = useState("");
  const [contractBalance, setContractBalance] = useState("0");
  const [isOwner, setIsOwner] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [unitType, setUnitType] = useState(null);

  useEffect(() => {
    const listenCall = async () => {
      loadUserBalance();
      checkOwner();

      contract.on("Deposited", (form, amm) => {
        console.log(form, amm);
      });
      contract.on("Withdrawed", (from, amm) => {
        console.log(from, amm);
      });
      contract.on("Transfered", (from, to, amm) => {
        console.log(from, to, amm);
        loadUserBalance();
      });
    };
    listenCall();
    return () => {
      contract.off("Deposited");
      contract.off("Withdrawed");
      contract.off("Transfered");
    };
  }, []);
  // const unitTypeHandler ()
  const loadUserBalance = async () => {
    // console.log(contract);
    const bal = await contract.getBalance();
    setBalance(formatEther(bal));
    const contractBal = await contract.getContractBalance().catch(() => {});
    if (contractBal) {
      setContractBalance(formatEther(contractBal));
    }
  };

  const checkOwner = async () => {
    const owner = await contract.owner();
    if (owner.toLowerCase() === account.toLowerCase()) {
      setIsOwner(true);
    }
  };

  const handleDeposit = async () => {
    try {
      if (!amount) {
        alert("please enter amount!");
        return;
      }
      const val = parseUnits(amount, Number(unitType));
      const tx = await contract.deposit({ value: val });
      await tx.wait();
      loadUserBalance();
    } catch (error) {
      console.error(error);
      alert(error.reason);
    }
  };

  const handleWithdraw = async () => {
    try {
      if (!amount) {
        alert("please enter amount!");
        return;
      }
      const val = parseUnits(amount, Number(unitType));
      const tx = await contract.withdraw(val);
      await tx.wait();
      loadUserBalance();
    } catch (error) {
      console.error(error);
      alert(error.reason);
    }
  };
  const handleTransfer = async () => {
    try {
      if (!amount) {
        alert("please enter amount!");
        return;
      }
      if (!isAddress(recipient)) {
        alert("wallet address is not valid!");
        return;
      }
      const val = parseUnits(amount, Number(unitType));
      const tx = await contract.transfer(getAddress(recipient), val);
      await tx.wait();
      loadUserBalance();
    } catch (error) {
      console.error(error);
      alert(error.reason);
    }
  };
  return (
    <div className="min-h-screen w-full h-screen flex py-30 px-20 bg-[url('./assets/5072609.jpg')] bg-cover bg-center">
      <div className="p-4 sm:p-6 my-6 sm:my-10 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto border rounded-md backdrop-blur-md shadow-lg drop-shadow-lg flex flex-col justify-center alighn-left">
        <div className="flex justify-between items-center h-10 px-6 border-gray-300 rounded-lg">
          <h2 className="text-base md:text-2xl font-bold">
            Welcome, {account.slice(0, 5) + "....." + account.slice(-3)}
          </h2>
          <button
            onClick={disconnectWallet}
            className="
    px-3 py-1.5              // default (mobile) padding
    text-sm                  // smaller font on mobile
    md:px-5 md:py-2          // more padding on medium+ screens
    md:text-base             // slightly larger font on desktop
    bg-red-500 text-white 
    rounded-md hover:bg-red-600
    transition-colors duration-200
  "
          >
            Disconnect
          </button>
        </div>
        <div className="stats shadow mb-4 flex flex-col md:flex-row">
          <div className="stat">
            <div className="stat-title">Your Smart Bank Balance</div>
            <div className="stat-value text-base sm:text-3xl">{balance} ETH</div>
          </div>
          {isOwner && (
            <div className="stat">
              <div className="stat-title">Contract Balance</div>
              <div className="stat-value text-base sm:text-3xl">{contractBalance} ETH</div>
            </div>
          )}
        </div>

        <div className="form-control mb-4 flex justify-around">
          
          <label className="label">
            <span className="label-text text-sm sm:text-base">Amount (ETH)</span>
          </label>
          <input
            type="text"
            placeholder="Enter amount"
            className="input input-bordered text-sm sm:text-base"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            defaultValue="Server location"
            onChange={(e) => setUnitType(e.target.value)}
            className="select select-neutral w-[40%] sm:w-auto"
          >
            <option value="0">Wei</option>
            <option value="3">Kwei</option>
            <option value="6">Mwei</option>
            <option value="9">Gwei</option>
            <option value="12">Microether</option>
            <option value="15">Milliether</option>
            <option value="18">Ether</option>
          </select>
        </div>

        <div className="flex gap-4 mb-4">
          <button className="btn btn-primary" onClick={handleDeposit}>
            Deposit
          </button>
          <button className="btn btn-secondary" onClick={handleWithdraw}>
            Withdraw
          </button>
          {/* <button className="btn btn-warning" onClick={handleTransfer}> */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn">
              Transfer
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-100 p-2 shadow-sm"
            >
              <li>
                <input
                  type="string"
                  placeholder="receipient address"
                  value={recipient}
                  onChange={(e) => {
                    setRecipient(e.target.value);
                  }}
                />
              </li>
              <li>
                <button className="btn btn-warning" onClick={handleTransfer}>
                  Confirm
                </button>
              </li>
            </ul>
          </div>
          {/* </button> */}
        </div>

        {/* Optional transfer or more interactions can go here */}
      </div>
    </div>
  );
}
