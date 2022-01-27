const Web3 = require('Web3');
require('dotenv').config();

const infuraUrl = process.env.INFURA_PROVIDER_URL;
const web3 = new Web3(infuraUrl);

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositToAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const conttactAddress = '0x068144e5DfaE3C80C0dbEEae3673fA87EA37B613';
const contract = new web3.eth.Contract(abi, conttactAddress);

const admin = '0xB33aec9BccD595BC3D2577b7d4c00a834F03f71f';
const nonAdmin = '0x1C2daB23E50241510e81b42591868d009dba1EF3';

//admin checking total assets
contract.methods.totalAssets()
.call({from: admin}, (err, res) => {   
   if(!err) console.log(web3.utils.fromWei(res) +' ETH');
});

//non admin checking total assets
//gives error
contract.methods.totalAssets()
.call({from: nonAdmin}, (err, res) => {   
   if(err)  console.log(err);
   if(!err) console.log(web3.utils.fromWei(res) +' ETH');
});
