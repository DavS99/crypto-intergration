const config = {
  addableNetworks: {
    Sahara: {
      chainName: 'Bahamut Mainnet',
      chainId: '0x142d',
      currency: 'FTN',
      rpcUrls: 'https://rpc1.bahamut.io',
      blockExplorerUrls: 'https://ftnscan.com',
      iconUrls: [
        'https://imgkub.com/images/2022/11/02/ftn-icon-m.png',
        'https://docs.fasttoken.com/ftn.svg'
      ]
    }
  },
  recommendedWalletIds: [
    '6db5c2cd78ea5a09e820b7543dacc90bf3b1727e5bbaddff544b301de1f74f39', // fastex wallet
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // metamask
    'ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18'
  ],
  walletConnectProjectId: 'be1e5e9a7aa917a6e23a49bde3fdec1b', // You have to create your own connector id
  providerName: 'Sahara',
  chainId: '0x142d',
  web3Providers: {
    Sahara: {
      providerURL: 'https://rpc2.bahamut.io',
      chainId: '0x142d',
      scanURL: 'https://ftnscan.com',
      scanKey: ''
    }
  }
}
export default config
