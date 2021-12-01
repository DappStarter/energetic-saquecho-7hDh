require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purpose gesture merry flock sick'; 
let testAccounts = [
"0xbdfba0a5b0cdd3fc66ff87ff098813678096f63603e874e4f2722e0a64d37873",
"0x74d9312d39f31c8c28db5644421530c42c85632cf9af202c1f73686f8e1caac2",
"0xd61750aaf2002992ac9015b06ebf3014463601e76ffc3ba25e648ecaea9304c1",
"0xea1e34d0878a9a145600818f68903206ddf7ab397e94c644d04966794179e7bf",
"0xec66564ff6e21610d086b28a0d73f4692ad8308dd68397d3438f02d59e37c73d",
"0xe16bcb87cc3634ecfb97958894c688f7153ec1f8087f0197ba9751dc2d8af533",
"0xf1783c999de77ddb8d14f1f3493ff7876ef57e7d0f4a1a8882c5fe195c285c45",
"0x850313636e4ff3c0c0009f353a2284a7817db07203c984c36c7f8b10190bf073",
"0x226cee866a75585b55a7d5fbdaeea3cecc038266593421249119aa55b69bfa8a",
"0x4a9d64342922866737f2c25b709d65eb5ed67d07fa8e38c26464136f8f3c9e24"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


