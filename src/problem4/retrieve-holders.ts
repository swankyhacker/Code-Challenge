// Tested using npx ts-node retrieve-holders.ts
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/",
  { name: "binance", chainId: 56 }
);

const addresses = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const wethAddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const wethAbi = ["function balanceOf(address) view returns (uint)"];

const wethContract = new ethers.Contract(wethAddress, wethAbi, provider);

(async () => {
  addresses.map(async (address) => {
    const wethBalance = await wethContract.balanceOf(address);
    const formattedBalance = Number(ethers.utils.formatUnits(wethBalance, 8));
    console.log(address, formattedBalance.toLocaleString("en-US"));
  });
})();
