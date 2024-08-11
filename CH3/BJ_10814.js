const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = Number(input[0]);
const arr = [];

for (let i = 1; i <= len; i++) {
	const [age, name] = input[i].split(' ');
	arr.push([Number(age), name]);
}

arr.sort((a, b) => a[0] - b[0]);

let answer = '';
for (let item of arr) {
	answer += `${item[0]} ${item[1]}` + '\n';
}

console.log(answer);
