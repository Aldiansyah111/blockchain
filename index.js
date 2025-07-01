// const Blockchain = require('./Blockchain');
// const Block = require('./Block');

// const myChain = new Blockchain();
// myChain.addBlock(new Block(1, Date.now(), { amount: 100 }));
// myChain.addBlock(new Block(2, Date.now(), { amount: 50 }));

// console.log(JSON.stringify(myChain, null, 2));



const Blockchain = require('./Blockchain');

// Inisialisasi blockchain (difficulty = 1 untuk cepat mining)
const myChain = new Blockchain();

// Buat transaksi
myChain.createTransaction({ from: 'Alice', to: 'Bob', amount: 100 });
myChain.createTransaction({ from: 'Bob', to: 'Charlie', amount: 50 });
myChain.createTransaction({ from: 'miner1', to: 'Dino', amount: 20 });
myChain.createTransaction({ from: 'Charlie', to: 'Alice', amount: 10 });
myChain.createTransaction({ from: 'Alice', to: 'Bob', amount: 100 });
myChain.createTransaction({ from: 'miner1', to: 'Bob', amount: 20 });
myChain.createTransaction({ from: 'miner2', to: 'Bob', amount: 20 });
myChain.createTransaction({ from: 'miner2', to: 'Boy', amount: 50 });
myChain.createTransaction({ from: 'miner2', to: 'Boy', amount: 50 });
myChain.createTransaction({ from: 'miner2', to: 'Boy', amount: 50 });

// Mining oleh miner1
console.log('\n⛏ Mining block...');
myChain.minePendingTransactions('miner1');

// Cek saldo setelah transaksi pertama
console.log('\nBalance Alice:', myChain.getBalanceOfAddress('Alice'));
console.log('Balance Bob:', myChain.getBalanceOfAddress('Bob'));
console.log('Balance Charlie:', myChain.getBalanceOfAddress('Charlie'));
console.log('Balance miner1:', myChain.getBalanceOfAddress('miner1'));

// Tampilkan seluruh isi blockchain
console.log('\nBlockchain:\n', JSON.stringify(myChain, null, 2));

// Cek saldo detail semua address
console.log('\nBalance miner1:', myChain.getBalanceOfAddress('miner1'));
console.log('Balance Dino:', myChain.getBalanceOfAddress('Dino'));
console.log('Balance Bob:', myChain.getBalanceOfAddress('Bob'));
console.log('Balance Charlie:', myChain.getBalanceOfAddress('Charlie'));
console.log('Balance miner2:', myChain.getBalanceOfAddress('miner2'));
console.log('Balance Alice:', myChain.getBalanceOfAddress('Alice'));
console.log('Balance Boy:', myChain.getBalanceOfAddress('Boy'));

// Mining block baru untuk mendapatkan reward
console.log('\n⛏ Mining next block to get reward...');
myChain.minePendingTransactions('miner1');
myChain.minePendingTransactions('miner2');
myChain.minePendingTransactions('miner2'); 
myChain.minePendingTransactions('miner2');
myChain.minePendingTransactions('miner2');
myChain.minePendingTransactions('miner2');
myChain.minePendingTransactions('miner2');
myChain.minePendingTransactions('miner3');
myChain.minePendingTransactions('miner4');
myChain.minePendingTransactions('miner4');
myChain.minePendingTransactions('Boy');
myChain.minePendingTransactions('Boy');
myChain.minePendingTransactions('Boy');
myChain.minePendingTransactions('Boy');
myChain.minePendingTransactions('Boy');


// Cek saldo akhir para miner
console.log('\nBalance miner1 after reward:', myChain.getBalanceOfAddress('miner1'));
console.log('Balance miner2 after reward:', myChain.getBalanceOfAddress('miner2'));
console.log('Balance miner3 after reward:', myChain.getBalanceOfAddress('miner3'));
console.log('Balance miner4 after reward:', myChain.getBalanceOfAddress('miner4'));
console.log('Balance Boy after reward:', myChain.getBalanceOfAddress('Boy'));

// 🔍 Informasi tambahan blockchain
const lastBlock = myChain.getLatestBlock();
console.log('\n🔢 Block Terakhir (index):', lastBlock.index);
console.log('📦 Hash:', lastBlock.hash);

console.log('\n📊 Total Block:', myChain.chain.length);

console.log('\n📄 Semua Block Index dan Hash:');
myChain.chain.forEach(block => {
  console.log(`Block #${block.index} - Hash: ${block.hash}`);
});
