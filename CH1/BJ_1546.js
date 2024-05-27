const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[0]);

const arr = input[1].split(' ').map(n => Number(n));
const maxNum = arr.reduce((acc, num) => Math.max(acc, num));
const update = arr.map((elem) => {return elem / maxNum * 100});
console.log(update.reduce((acc, n) => acc + n) / count);