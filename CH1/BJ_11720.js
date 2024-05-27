const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const strArr = input[1].split('');
const sum = strArr.map((n) => Number(n)).reduce((acc, n) => acc + n);
console.log(sum);