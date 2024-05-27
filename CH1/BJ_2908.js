const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = Number(input[0].split('').reverse().join(''));
const num2 = Number(input[1].split('').reverse().join(''));

console.log(Math.max(num1, num2));
