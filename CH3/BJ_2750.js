const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = Number(input[0]);
const arr = [];

for (let i = 1; i < len + 1; i++) {
	arr.push(Number(input[i]))
}

arr.sort((a, b) => a - b);
console.log(arr.reduce((acc, val) => acc + '\n' + val))