const fs = require('fs');
const input = fs.readFileSync( '/dev/stdin').toString().split('\n').map(Number);
let answer = 0;
let n = input[0];
let flag = false;

while (n >= 0) {
	if (n === 0 || n % 5 === 0 ) {
		answer += parseInt(n / 5);
		console.log(answer);
		flag = true;
		break;
	}
	n -= 3
	answer += 1;
}

if (flag === false) {
	console.log(-1);
}
