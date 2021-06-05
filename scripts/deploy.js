const hre = require('hardhat');

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  const Greeter = await hre.ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Hello, World!');

  const Token = await hre.ethers.getContractFactory('Token');
  const token = await Token.deploy();

  const TPCToken = await hre.ethers.getContractFactory('TPCToken');
  const tpcToken = await TPCToken.deploy('TP Coder Token', 'TPC');

  await greeter.deployed();
  await token.deployed();
  await tpcToken.deployed();

  console.log('Greeter deployed to:', greeter.address);
  console.log('Token deployed to:', token.address);
  console.log('TP Coder Token deployed to:', tpcToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
