const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map((value) => Number(value));
const [a, b, c] = input;
// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
// 3개 다 맞았을 경우
if (a === b && b === c) {
	console.log(10000 + a * 1000);
} else if(a === b || a === c) {
	console.log(1000 + a * 100);
} else if (b === c) {
	console.log(1000 + b * 100);
} else {
	console.log(Math.max(a, b, c) * 100);
}