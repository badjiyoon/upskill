const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = Number(input[0]);
const data = [];

for (let i = 1; i <= length; i++) {
	data.push(input[i]);
}

const uniqueData = [...new Set(data)];

uniqueData.sort((a, b) => {
	// 길이가 짧은순서부터 우선 정렬
	if (a.length !== b.length) {
		return a.length - b.length;
	} else {
		// 길이가 같다면 사전순 정렬
		if (a < b) {
			return -1;
		} else if(a > b) {
			return 1;
		} else {
			return 0;
		}
	}
})

let answer = '';
for (let word of uniqueData) {
	answer += word + '\n'
}
console.log(answer);