// =============== Sign a message=================
const crypto = require('crypto');
const buffer = require('buffer');
const fs = require('fs');

// Import Public and Private keys
const publicKey = fs.readFileSync('Keys/publickey.pem', 'utf-8');
const privateKey = fs.readFileSync('Keys/privateKey.pem', 'utf-8');
var message_text = fs.readFileSync('Message.txt');

console.log(crypto.getHashes()); // To get list of Algorithms
const ALGO = 'RSA-SHA256';

const data = Buffer.from(message_text);
  
console.log(data);
// Sign the data and returned signature in buffer 
const sign = crypto.sign("SHA256", data , privateKey);

// Convert returned buffer to base64
const signature = sign.toString('hex');
  
// Printing the signature 
console.log(`Signature:\n\n ${signature}`);

const verify = crypto.verify('SHA256', message_text , publicKey,sign);
console.log(verify)


// To a digital signature works -->
//1. Create Hash of Messgage/transaction data.
//2. Encrypt that msg using Private key.
//3. Reciver or Miner will use you public key to Decrypt the msg.
//4. Reciver / miner will get you hashed msg.
//5. Reciver / miner will create Hash of you Message/ Transaction and Mathch with Hash recieved after decrypting
//6. If Both hash are same the signature is valid else not valid.   