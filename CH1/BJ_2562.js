const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map((value) => Number(value));

// let maxValue = 0;
// let idx = 0;
//
// for (let i = 0; i < input.length; i++) {
// 	if (maxValue < input[i]) {
// 		maxValue = input[i];
// 		idx = i;
// 	}
// }

const maxValue = Math.max(...input);
console.log(maxValue);
console.log(input.indexOf(maxValue) + 1);