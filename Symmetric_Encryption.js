// Symmetric Encryption using Node.js

const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');
const fs = require('fs');
// Import Message text
const message_text = fs.readFileSync('Message.txt');

// Convert To Cipher text
const key = randomBytes(32);
const iv = randomBytes(16);

// Defining algorithm
const algorithm = 'aes-256-cbc';

const cipher = createCipheriv(algorithm, key, iv);

// Encrypt The Message
const encryptedMessage =
  cipher.update(message_text, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted Message: ${encryptedMessage}`);

// Decrypt The Message
const decipher = createDecipheriv(algorithm, key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
console.log(`Decrypted Message: ${decryptedMessage.toString('utf-8')}`);
