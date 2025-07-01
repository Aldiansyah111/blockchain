// const Block = require('./Block');

// class Blockchain {
//   constructor() {
//     this.chain = [this.createGenesisBlock()];
//   }

//   createGenesisBlock() {
//     return new Block(0, Date.now(), 'Genesis Block', '0');
//   }

//   getLatestBlock() {
//     return this.chain[this.chain.length - 1];
//   }

//   addBlock(newBlock) {
//     newBlock.previousHash = this.getLatestBlock().hash;
//     newBlock.hash = newBlock.calculateHash();
//     this.chain.push(newBlock);
//   }

//   isValid() {
//     for (let i = 1; i < this.chain.length; i++) {
//       const current = this.chain[i];
//       const previous = this.chain[i - 1];

//       if (current.hash !== current.calculateHash()) return false;
//       if (current.previousHash !== previous.hash) return false;
//     }
//     return true;
//   }
// }

// module.exports = Blockchain;





const Block = require('./Block');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 3; // jumlah angka nol di depan
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(minerAddress) {
    const block = new Block(
      this.chain.length,
      Date.now(),
      this.pendingTransactions,
      this.getLatestBlock().hash
    );

    block.mineBlock(this.difficulty);
    this.chain.push(block);

    // Reset pending transactions + kirim reward
    this.pendingTransactions = [
      { from: null, to: minerAddress, amount: this.miningReward }
    ];
  }

  createTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      if (!Array.isArray(block.data)) continue;

      for (const tx of block.data) {
        if (tx.from === address) balance -= tx.amount;
        if (tx.to === address) balance += tx.amount;
      }
    }

    return balance;
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const curr = this.chain[i];
      const prev = this.chain[i - 1];

      if (curr.hash !== curr.calculateHash()) return false;
      if (curr.previousHash !== prev.hash) return false;
    }
    return true;
  }
}

module.exports = Blockchain;
