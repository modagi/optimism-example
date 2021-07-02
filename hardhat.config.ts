//import { task } from "hardhat/config";
//import "@nomiclabs/hardhat-waffle";

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@eth-optimism/hardhat-ovm'

export default {
  mocha: {
    timeout: 20000,
  },
  solidity: "0.7.6",
  networks: {
    optimism: {
      url: 'http://127.0.0.1:8545',
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk'
      },
      // This sets the gas price to 0 for all transactions on L2. We do this
      // because account balances are not automatically initiated with an ETH
      // balance (yet, sorry!).
      gasPrice: 0,
      ovm: true // This sets the network as using the ovm and ensure contract will be compiled against that.
    }
  }
};

