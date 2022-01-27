const Web3 = require('Web3');

const web3 = new Web3('HTTP://127.0.0.1:7545');
process.env.PRIVATE_KEY = 'f5ec901deebd8fcf878f62c921448585a423b2420d0c3ddcd875cb5e3df4a858';
console.log(process.env.PRIVATE_KEY);


const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"balance","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositToAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"bal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = '0xc028729f13f881Bf1CF1de71d5E0113af2544785';
const contract = new web3.eth.Contract(abi, contractAddress);

const admin = '0xE9605b400D8f2F0341F24d4EDb15e61b65dABd10';
const nonAdmin = '0xE5160e414bc10afe0f43183C40592ec1ac0359bb';

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
