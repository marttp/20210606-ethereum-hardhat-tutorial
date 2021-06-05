# Full Stack Ethereum Blockchain Application

## Instruction
- npx create-react-app react-dapp
- npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
- npx hardhat

### Compile the ABI (Application Binary Interface)
- npx hardhat compile

### Deploy and Use a Local Network / Blockchain
- npx hardhat node
- npx hardhat run scripts/deploy.js --network localhost


### MetaMask Localhost
- MetaMask -> Localhost
- Import Account with Private Key


### Deploy and Use a Live Test Network (Ropsten)
- MetaMask -> Robsten network
- Get Test faucet [this link](https://faucet.ropsten.be/) (Put MetaMask address)
- Use [Infura](https://infura.io/) to create an app
- Get endpoint to use in hardhat.config.js
- set env private key
- npx hardhat run scripts/deploy.js --network ropsten


### Create example Token
- create Token.sol
- npx hardhat compile


### How to Build An ERC20 Token
The ERC20 Token Standard defines a set of rules that apply to all ERC20 tokens which allow them to easily interact with each other
- install OpenZepplin
- npm install @openzeppelin/contracts
- create token by extending (or inheriting from) the ERC20 contract
