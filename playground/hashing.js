const {SHA256} = require('crypto-js');

var message = "I am IRON MAN";
var hash = SHA256(message).toString();

console.log(`message: ${message}`);
console.log(`hash: ${hash}`);
