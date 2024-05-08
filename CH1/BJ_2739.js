const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map((value) => +value);
const [n] = input;

for (let i = 1; i <= 9; i++) {
	console.log(`${n} * ${i} = ${n * i}`);
}