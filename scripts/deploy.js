const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  // Fetch contact to deploy
  const GetterSetter = await ethers.getContractFactory("GetterSetter")
  const gsetter = await GetterSetter.deploy()
  await gsetter.deployed()
  console.log(`contract deployed to :${gsetter.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
