const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map((value) => +value);
const [n] = input;
let star = '';

for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= i; j++) {
		star += '*';
	}
	star += '\n';
}

console.log(star);