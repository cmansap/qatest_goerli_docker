const hre = require("hardhat");
const config = require('../src/config.json')
const fs = require('fs');

async function main() {
    // Fetch accounts
    console.log(`Fetching accounts & network \n`)
    const accounts = await ethers.getSigners()
    const deployer = accounts[0]

    // Fetch Network
    const { chainId } = await ethers.provider.getNetwork()
    console.log(`Fetching the gettersetter...\n`)

    // Fetch GetterSetter
    const gsetter = await ethers.getContractAt('GetterSetter', config[chainId].gsetter.address)
    console.log(`GetterSetter fetched: ${gsetter.address}\n`)

    let setvalue,getvalue
    let value = 789

    // Set the value to 789
    setvalue = await gsetter.connect(deployer).setUint256(value)
    await setvalue.wait()

    // Get the value
    getvalue = await gsetter.connect(deployer).getUint256()
    console.log(`The values set it to : ${getvalue}`)

    // Creating an Object
    const newObject = {
        contrct_address : gsetter.address ,
        set_value :getvalue.toNumber( ),
        deployer_address : accounts[0].address
    }

    // Writing data to JSON file from the Object
    const jsonString = JSON.stringify(newObject,null,2);
    console.log(jsonString);

    fs.writeFile('./TestResults.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
