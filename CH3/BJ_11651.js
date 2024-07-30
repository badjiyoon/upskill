const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = Number(input[0]);
const data = [];

for (let i = 1; i <= length; i++) {
	const [x, y] = input[i].split(' ').map(Number);
	data.push([x, y]);
}

data.sort((a, b) => {
	if (a[1] !== b[1]) {
		return a[1] - b[1];
	} else {
		return a[0] - b[0];
	}
})

let answer = '';
for (let point of data) {
	answer += point[0] + ' ' + point[1] + '\n';
}

console.log(answer);