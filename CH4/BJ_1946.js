const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const tcCnt = Number(input[0]);

let line = 1;

for (let i = 0; i < tcCnt; i++) {
	const n = Number(input[line]);
	let arr = [];
	for (let j = line + 1; j <= line + n; j++) {
		const [a,b ] = input[j].split(' ').map(Number);
		arr.push([a, b]);
	}

	arr.sort((x, y) => x[0] - y[0]);
	let count = 0;
	let minVal = 10001;

	for (let [x, y] of arr) {
		if (y < minVal) {
			minVal = y;
			count++;
		}
	}
	console.log(count);
	line += n + 1;
}