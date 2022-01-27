# BankSmartContract

### This is a smart contract that allows you to deposit and withdraw `ETHER` to/from contract.

##### Check file `Bank/Bank.sol` for smart contract code 
##### The smart contract should be compiled before executing any scripts, also compiled contract's `Byte code` and `abi` should be replaced in the scripts 
##### Various `scripts` under folder `/Bank` can be executed to deploy smart contract, deposit ETH, wihdraw ETH, check balance of account etc...
##### All scripts have alternative version to interact with local block chain ganache, main scripts could be used to deploy onto testnet or mainnet 
##### A `.env` file need to be created, should include infura api url as a `provider`, also `private key` of the account you use to deploy smart contract


```
INFURA_PROVIDER_URL=<infura-end-point>
PRIVATE_KEY=<admin-account-private-key>
PRIVATE_KEY_A2=<secondary-account-private-key>
```

##### The smart contract can be deployed to block chain through Bank/deployBankSmartContract.js
```
node Bank/deployBankSmartContract.js
or use ganache version
deployBankSmartContract-ganache.js
```

## Below are smart contract functions

##### 1. `deposit()` -> deposit ETH your own account
```
node Bank/deposit.js

```

##### 2. `depositToAccount(address addr, uint256 amount)` -> ETH to another account, account should already have ETH in the smart contract to  be able to send another account.
```
node Bank/depositToAccount.js

```

##### 3. `withdraw(uint256 amount)` -> withdraw certain amount of ETH 
```
node Bank/withdraw.js

```

##### 4. `withdrawAll()` -> withdraws all ETH from account
```
node Bank/withdrawAll.js

```

##### 5. `balance()` -> returns balance of the account interacting with this function
```
node Bank/readBalances.js

```

##### 6. `balance(address addr)` -> returns balance of the any account, only Admin i.e. contract deployer or owner of the account can call this function
```
node Bank/readBalances.js

```

##### 7. `totalAssets()` -> returns cummulative balance of all accounts, only Admin can call this function
```
node Bank/totalAssets.js

```
