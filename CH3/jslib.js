const arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
// 오름차순
arr.sort((a, b) => a - b);
// 내림차순
arr.sort((a, b) => b - a);
console.log(arr);

// 문자열 정렬
const arr1 = ['fineapple', 'banana', 'durian', 'apple', 'carrot'];

// 오름차순
arr1.sort();
// 내림차순
arr1.sort((a, b) => {
	if (a > b) return -1;
	else if (a < b) return 1;
	else return 0;
});

// 대소문자 구분 (오름차순)
arr1.sort((a, b) => {
	const upperCaseA = a.toUpperCase();
	const upperCaseB = b.toUpperCase();
	if (upperCaseA < upperCaseB) return -1;
	else if (upperCaseA > upperCaseB) return 1;
	else return 0;
})

console.log(arr1);

const arr2 = [
	{name: '홍길동', score: 90},
	{name: '김철수', score: 85},
	{name: '박영희', score: 97},
]

arr2.sort((a, b) => a.score - b.score)

console.log(arr2);