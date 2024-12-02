const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const groups = input[0].split('-');
let answer = 0;

for (let i = 0; i < groups.length; i++) {
	const cur = groups[i].split('+').map(Number).reduce((acc, val) => acc + val);
	if (i === 0) {
		answer += cur;
	} else {
		answer -= cur;
	}
}

console.log(answer);
