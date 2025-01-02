const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);
let cnt = 0;
let sum = 0;

while (sum <= num) {
	cnt += 1;
	sum += cnt;
}

console.log(cnt - 1);