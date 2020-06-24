require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name razor mean protect include enter army ghost'; 
let testAccounts = [
"0x36cc415ed513adb1bee85969cfa09407645e003cd53b441b9cd6eaf4ba2cf17c",
"0x6feda84a3077baa01f29778317234364fa98350b57dc01457bc4255f6c2653dc",
"0xc6021920e1c6ed0ed0b8c7f2e13104ff4b170fa22a5a4082cc9db1f7fc2482f8",
"0xb3521295cc5e745ab512a56b9bcb497ce399da99293b8ac5d191c2c4375c290d",
"0xecacaae06b0a9955dee99c79443c02aaa09032089e2307586b3b98c1963c13b4",
"0xd03e405d389c947d2d99ed4f5ed7aac87b03463530528a35d8a49171c3acdd68",
"0x10878f979280554ff4cadcc764be86edbd51ecdffdaf6d8c9752e8cd9f4b2a72",
"0x8e8b8d9fc57a69d912e5f354987dd571e643ea451378a7db1c215871325dccfd",
"0xec906d02985eb6ca6c4f6eb82d5e32a246c2550148069b642bbac0b50eb29171",
"0x6ef3c9da90d75ce3803d2db1234b4ea1f94022c350494ffcbdbc35a574f5638c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
