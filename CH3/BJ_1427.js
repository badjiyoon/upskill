const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const cnt = Array(10).fill(0);

for (let i of input[0]) {
	cnt[Number(i)]++;
}

let answer = '';
for (let i = cnt.length; i >= 0; i--) {
	for (let j = 0; j < cnt[i]; j++) {
		answer += i + '';
	}
}

console.log(answer);
