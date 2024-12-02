const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);

const moneyArr = [];

for (let i = 1; i <= n; i++) {
	moneyArr.push(Number(input[i]));
}

let cnt = 0;

for (let i = n - 1; i >= 0; i--) {
	cnt += parseInt(k / moneyArr[i]);
	k = k % moneyArr[i];
}
console.log(cnt);
