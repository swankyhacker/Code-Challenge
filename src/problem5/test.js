// Please create a .env file in this directory with the following keys:
// PRIVATE_KEY
// PUBLIC_KEY
// WEB3_INFURA_PROJECT_ID

const dotenv = require("dotenv");
const { ethers } = require("ethers");

dotenv.config();

const ADDR = "0xe3fABA8F2A02597124eb2F218C362190d3d9e130"; // your contract address
const ABI = [
  "function getBalances(address _user, address[] memory _tokens) public view returns (TokenBalance[] memory)",
];

const ADDRESS = process.env.PUBLIC_KEY; // some wallet address with token balance
const TOKENS = [
  "0x4B012a2776695A0F6143102F32E77ec336eFeA91",
  "0xa36085F69e2889c224210F603D836748e7dC0088",
];

// const provider = ethers.providers.getDefaultProvider("kovan");
const provider = new ethers.providers.JsonRpcProvider(
  `https://kovan.infura.io/v3/${process.env.WEB3_INFURA_PROJECT_ID}`,
  { name: "kovan", chainId: 42 }
);

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);
  const balances = await contract.getBalances(ADDRESS, TOKENS);
  return balances;
};

test().then(console.log);
