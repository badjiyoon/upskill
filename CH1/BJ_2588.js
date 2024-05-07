const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [num1, num2] = input;

console.log(parseInt(num1) * parseInt(num2[2]));
console.log(parseInt(num1) * parseInt(num2[1]));
console.log(parseInt(num1) * parseInt(num2[0]));
console.log(parseInt(num1) * parseInt(num2));