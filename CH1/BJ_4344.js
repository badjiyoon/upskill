const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = Number(data[0]);

for (let i = 1; i <= count; i++) {
	const arr = data[i].split(' ').map(n => Number(n));
	const subNum = arr[0];
	arr.shift();
	const avg = arr.reduce((acc, val) => acc + val) / subNum;
	const avgArr = arr.filter(n => { if (n > avg) return n });
	console.log(`${((avgArr.length / subNum) * 100).toFixed(3)}%`);
}