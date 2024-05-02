// 02.js 함수의 인자 맞바꾸기

var newArr = [10, 20, 30].map(function (index, currentValue) {
	console.log(index, currentValue);
	return currentValue + 5;
});
console.log(newArr);