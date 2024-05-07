const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [num] = input;
const number = parseInt(parseInt(num) / 10);

switch (number) {
	case 10:
		console.log('A');
		break;
	case 9:
		console.log('A');
		break;
	case 8:
		console.log('B');
		break;
	case 7:
		console.log('C');
		break;
	case 6:
		console.log('D');
		break;
	default:
		console.log('F');
		break;
}


