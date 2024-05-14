const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));
let mySet = new Set(); // 집합 객체 생성

for (let i = 0; i < input.length - 1; i++) {
	mySet.add(input[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
}

console.log(mySet.size);