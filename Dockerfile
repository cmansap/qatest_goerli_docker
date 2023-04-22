FROM node:14-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN apk add git;
RUN yarn install --non-interactive --frozen-lockfile
COPY $PWD/docker/entrypoint.sh /usr/local/bin
ENTRYPOINT ["/bin/sh", "/usr/local/bin/entrypoint.sh"]
RUN npm install --save-dev '@nomicfoundation/hardhat-toolbox'
RUN npm install --save-dev @nomicfoundation/hardhat-network-helpers 
RUN npm install --save-dev @nomicfoundation/hardhat-chai-matchers
RUN npm install --save-dev @nomiclabs/hardhat-ethers
RUN npm install --save-dev @nomiclabs/hardhat-etherscan @types/chai
RUN npm install --save-dev "chai@^4.2.0" 
RUN npm install --save-dev "@types/mocha@>=9.1.0" "@typechain/ethers-v5@^10.1.0" "@typechain/hardhat@^6.1.2" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.1" "ts-node@>=8.0.0" "typechain@^8.1.0" "typescript@>=4.5.0"
