const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);
let [h, m] = input;
// 음수값이 경우 시간에서 뺴서 처리한다.
if (m < 45) {
	h -= 1;
	m += 15;
	if (h < 0) h = 23;
} else {
	m -= 45;
}
console.log(h + ' ' + m);