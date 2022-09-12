//=================Asymmetric-Encryption Using==============

const crypto = require('crypto');
const fs = require('fs');

// First generate public and private key using this cmd -> npm run generate-key

// Import Public and Private keys
const publicKey = fs.readFileSync('Keys/publickey.pem', 'utf-8');
const privateKey = fs.readFileSync('Keys/privateKey.pem', 'utf-8');
const message_text = fs.readFileSync('Message.txt');

/* 
There is Two method to Encrypt and Decrypt Data using keys.
1. If message is encrypted using private key, then only public key decrypt that message
2. If message is encrypted using public key, then only private key decrypt that message
*/

// Fisrt Method ==>

const privateKeyEncryptedData = crypto.privateEncrypt(privateKey, message_text); // Encrypted data is in format of Buffer

console.log(privateKeyEncryptedData.toString('hex')); // Convert to Hex format, You can also Use base64

const publicKeyDecryptedData = crypto.publicDecrypt(
  publicKey,
  privateKeyEncryptedData
);

console.log(publicKeyDecryptedData.toString()); // Convert publicKeyDecryptedData (Buffer) to string 'utf-8'

// Second Method ==>
// It is a secured method

const publicKeyEncryptedData = crypto.publicEncrypt(publicKey, message_text);

//console.log(publicKeyEncryptedData.toString('hex'));

const privateKeyDecryptedData = crypto.privateDecrypt(
  privateKey,
  publicKeyEncryptedData
);

//console.log(privateKeyDecryptedData.toString());

