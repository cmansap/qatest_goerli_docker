# Technology Stack & Tools
Solidity (Writing Smart Contracts & Tests)
Javascript (React & Testing)
Hardhat (Development Framework)
Ethers.js (Blockchain Interaction)
React.js (Frontend Framework)

# Requirements For Initial Setup
 Install NodeJS

# Steps to Follow to solve the Challenge

   ###### 1. create react project
       npx create-react-app qaengineer-test
   ###### 2. to create hardhat project)
       npx hardhat
   ###### 3. setup .env file with 
       ALCHEMY_API_KEY = ""   Note : I use Alchemy node provider!
       PRIVATE_KEY = ""       Note : Use metamask to create a new account and generate the private keys.
   ###### 4. start developement blockchain
       npx hardhat node 
   5. create qatest.sol copy the smartcontract given for test
   ###### 6. compile the smart contract
       npx hardhat compile
   7.update the deploy.js
   ###### 8. deploy the smart contract on hardhat blockchain
       npx hardhat run --network goerli ./scripts/deploy.js
   9.create config.json(under src folder) and update the chainID & contract address
   
   ###### 10.create interaction.js file to interact with blockchain using ether.js/javascript
       npx hardhat run --network goerli ./scripts/interaction.js
   11.update the interaction.js file to send the contract address,set value,deployer address to JSON file(TestResults.json file will be created)
   ###### 12. create a bash file with commands :
       npx hardhat run --network goerli ./scripts/deploy.js
       npx hardhat run --network goerli ./scripts/interaction.js
   13. chmod +x run.sh ( to make the bash file executable)
   14. execute ./run.sh
   
   15. Create Dockerfile
   
   16. ###### Run docker build command
        `docker build -t qaengineer-test .`
           
