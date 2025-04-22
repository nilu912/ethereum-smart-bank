const hre = require("hardhat");
const {ethers} = require('ethers')
require('dotenv').config()

async function main(){
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deployer: ", deployer.address);

        const SmartBank = await hre.ethers.getContractFactory("smartBank");
        const smartbank = await SmartBank.deploy();
        await smartbank.waitForDeployment();

        console.log("Contract address:", await smartbank.getAddress())
}
main().catch((error)=>{
    console.log(error);
    process.exitCode = 1
})

// 0xbBae65dA6a3cAdeb4D867eB909cF2f9d567e450F