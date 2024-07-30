const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = Number(input[0]);
const numArr = input[1].split(' ').map(Number);

const setArr = [...new Set(numArr)];
setArr.sort((a, b) => a - b)
const resultArr = [];

const myMap = new Map();
for (let i = 0; i < setArr.length; i++) {
	myMap.set(setArr[i], i);
}

let answer = '';

for (let x of numArr) {
	answer += myMap.get(x) + ' ';
}
console.log(answer);
