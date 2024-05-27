const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let summary = 0;

const groupStrCheck = (data) => {
	const setData = new Set(data[0]);

	for (let i = 0; i < data.length - 1; i++) {
		// 오른쪽 단어와 다르면
		if (data[i] !== data[i + 1]) {
			// 이미 등장한적 있는 알파벳이라면
			if (setData.has(data[i + 1])) {
				return false;
			} else {
				setData.add(data[i + 1]);
			}
		}
	}
	return true;
}

for (let i = 1; i <= n; i++) {
	const data = input[i];
	if (groupStrCheck(data)) summary += 1;
}

console.log(summary);