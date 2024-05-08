const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';
/* 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다. */
// let minValue = 1000001;
// let maxValue = -1000001;
const n = input[0];
const arr = input[1].split(' ').map((value) => Number(value));

const minValue = arr.reduce((acc, val) => Math.min(acc, val));
const maxValue = arr.reduce((acc, val) => Math.max(acc, val));

// for (let i = 0; i < n; i++) {
// 	if (minValue > arr[i]) minValue = arr[i];
// 	if (maxValue < arr[i]) maxValue = arr[i];
// }

answer += `${minValue} ${maxValue}`;
console.log(answer);