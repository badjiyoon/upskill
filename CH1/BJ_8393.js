const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);
const [n] = input;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
// 	sum += i;
// }

// 등차수열 Sn 처리
// Sn = 3 * (1 + 3) / 2
console.log(n * (1 + n) / 2);