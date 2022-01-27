const Web3 = require('Web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');

web3.eth.getBlock('latest').then((res) => {
    console.log(res);
});


web3.eth.getBlock('latest').then((res) => {
    console.log(res);
});

web3.eth.getBlock(1).then((res) => {
    console.log(res);
});

web3.eth.getBlock('0xea0c0968ec77008c0b337bf0b59af69ca18dc702668a74b9f398f85b6f84fca2').then((err, res) => {
    console.log(err, res);
});