const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map((value) => Number(value));
input.sort((a, b) => a - b)
const result = input.reduce((acc, value) => String(acc) + ' ' + String(value) );
console.log(result);
