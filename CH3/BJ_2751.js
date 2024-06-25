const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(value => Number(value));

const cnt = input[0]

const arr = [];

for (let i = 1; i <= cnt; i++) {
	arr.push(input[i]);
}

arr.sort((a, b) => a - b);
console.log(arr.reduce((acc, value) => acc + '\n' + value ));