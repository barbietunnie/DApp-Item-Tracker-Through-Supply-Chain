const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");

const infuraKey = fs.readFileSync(".infura").toString().trim();
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: 4,
      gas: 6500000,
      gasPrice: 25000000000,
      skipDryRun: true,
      transactionBlockTimeout: 2000,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${infuraKey}`
        ),
      network_id: 3,
      gas: 6500000,
      gasPrice: 25000000000,
      skipDryRun: true,
      transactionBlockTimeout: 2000,
    },
  },
  compilers: {
    solc: {
      version: "0.5.1"
    }
  }
};