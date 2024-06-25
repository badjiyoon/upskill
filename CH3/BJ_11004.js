const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [cnt, number] = input[0].split(' ');
const arr = input[1].split(' ').map(val => Number(val)).sort((a, b) => a - b);
console.log(arr[Number(number - 1)]);
