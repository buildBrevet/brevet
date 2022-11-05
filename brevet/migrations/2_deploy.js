const BrevToken = artifacts.require("BrevToken");
const BrevetMarketplace = artifacts.require("BrevetMarketplace");
const patentnft = artifacts.require("patentnft");
const ResearchHelper = artifacts.require("ResearchHelper");

module.exports = async function (deployer, network, accounts) {
  //Deploy the Mock Brev Token
  await deployer.deploy(BrevToken);
  const brevToken = await BrevToken.deployed();

  //Deploy ResearchHelper

  await deployer.deploy(ResearchHelper, brevToken.address);

  // Deploy patent NFT
  await deployer.deploy(patentnft);
  // Deploy BrevetMarketplace
  await deployer.deploy(BrevetMarketplace, 2);
};
