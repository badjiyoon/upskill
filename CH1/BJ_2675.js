const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
	const [r, s] = input[i].split(' ');
	let result = '';

	for (let j = 0; j <= s.length; j++) {
		result += s.charAt(j).repeat(Number(r));
	}

	console.log(result);
}