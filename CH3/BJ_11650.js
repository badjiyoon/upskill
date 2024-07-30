const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = Number(input[0]);
const data = [];

for (let i = 1; i <= length; i++) {
	const [x, y] = input[i].split(' ').map(Number);
	data.push([x, y]);
}

data.sort((a, b) => {
	// x 좌표 기준 오름차순 기준
	if (a[0] !== b[0])
		return a[0] - b[0];
	else {
	// x 좌표가 같을 경우 y 좌표 오름차순 기준
		return a[1] - b[1];
	}
})

let answer = '';
for (let point of data) {
	answer += point[0] + ' ' + point[1] + '\n';
}

console.log(answer);