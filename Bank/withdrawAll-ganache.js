const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545');
//process.env.PRIVATE_KEY = 'f5ec901deebd8fcf878f62c921448585a423b2420d0c3ddcd875cb5e3df4a858';
process.env.PRIVATE_KEY = '57a91ba54c3f8bf0d157230ad9fab26d1eb1323a3ca6439f09dd7b6035147398';
//process.env.PRIVATE_KEY = '6509b4d05e9f9f0511f169c991fe89f21399ae76af6effe1309f7bec8eaa926b';


const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositToAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = '0xc028729f13f881Bf1CF1de71d5E0113af2544785';
const contract = new web3.eth.Contract(abi, contractAddress);


const account1 = '0xE9605b400D8f2F0341F24d4EDb15e61b65dABd10';
const account2 = '0xE5160e414bc10afe0f43183C40592ec1ac0359bb';
const account3 = '0x622bB130077a58590E856b2d4F93aB35364022A6';

const privateKey = process.env.PRIVATE_KEY;
const data = contract.methods.withdrawAll().encodeABI();
const gas = '1000000';

web3.eth.getTransactionCount(account2, (err, txCount) => {

    const txObject = {
        nonce: txCount,
        from: account1,
        gas: gas,
        to: contractAddress,
        data: data
    };
    
    
    web3.eth.accounts.signTransaction(txObject, privateKey).then((signedTx)=>{
        web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on("receipt", receipt => {
            console.log(receipt);
        })
        .on("error", err => {
            console.log(err);
        });
    });

});
