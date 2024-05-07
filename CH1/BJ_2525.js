const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [h, m] = input[0].split(' ').map(value => +value);
let c = parseInt(input[1]);

// 전체 분계산
let totalMinute = h * 60 + m + c;
// 하루의 나머지를 넣어준다.
totalMinute %= 1440;
console.log('totalMinute', totalMinute);
const hour = parseInt(totalMinute / 60);
const minute = totalMinute % 60;

console.log(`${hour} ${minute}`);