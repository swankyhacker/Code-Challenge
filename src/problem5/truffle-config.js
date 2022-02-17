const dotenv = require("dotenv");
dotenv.config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = [process.env.PRIVATE_KEY];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider({
          privateKeys: privateKeys,
          providerOrUrl: `https://kovan.infura.io/v3/${process.env.WEB3_INFURA_PROJECT_ID}`,
        });
      },
      network_id: "42",
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
