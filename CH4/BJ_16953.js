const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let flag = false;
let cnt = 1;
// console.log('aaa', a, b);
while(a <= b) {
	if (a === b) {
		flag = true;
		break;
	}
	if (b % 2 === 0) {
		// 2으로 나누어 떨어지는 경우
		b = parseInt(b / 2);
		// console.log('2222', b);
	} else if (b % 10 === 1) {
		// 10으로 나누어 떨어지는 경우
		b = parseInt(b / 10);
		// console.log('1010', b);
	} else {
		// 케이스가 없는 경우
		break;
	}
	cnt++;
}
if (flag) {
	console.log(cnt);
} else {
	console.log(-1);
}


