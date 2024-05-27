const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const char = input[0].trim().split(' ');
console.log(char.join('') === '' ? 0 : char.length);