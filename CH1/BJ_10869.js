const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const [a, b] = input;
// A+B, A-B, A*B, A/B(몫), A%B(나머지)
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);