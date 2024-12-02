const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0])
const numArr = input[1].split(' ').map(Number);
let answer = 0;
let summary = 0;
numArr.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
	summary += numArr[i];
	answer += summary;
}

console.log(answer);