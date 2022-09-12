//=================Generate Public and Private Key Combinations==================

const fs = require('fs');
const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 1024, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

// Keys in format of UTF-8

// Store Public Key and Private Key
fs.writeFile('Keys/publickey.pem', publicKey, function (err) {
  if (err) throw err;
  console.log('Public Key Saved!');
});

fs.writeFile('Keys/privatekey.pem', privateKey, function (err) {
  if (err) throw err;
  console.log('Private Key Saved!');
});
