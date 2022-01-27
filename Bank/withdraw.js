const Web3 = require('web3');
require('dotenv').config();

const infuraUrl = process.env.INFURA_PROVIDER_URL;
const web3 = new Web3(infuraUrl);


const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositToAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = '0x068144e5DfaE3C80C0dbEEae3673fA87EA37B613';
const contract = new web3.eth.Contract(abi, contractAddress);


const account1 = '0xB33aec9BccD595BC3D2577b7d4c00a834F03f71f';
const privateKey = process.env.PRIVATE_KEY;
const amount = '500000000000000000';
const data = contract.methods.withdraw(amount).encodeABI();
const gas = '1000000';

web3.eth.getTransactionCount(account1, (err, txCount) => {

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
