// 콜백지옥 예시(09.js) 해결방법
// 첫번째 방법: 기명함수로 변환
// But.. 근본적인 해결방법 아님
// 일일이 변수의 이름을 붙여줘야 하기 때문에 인력 낭비!

var coffeeList = '';

var addEspresso = function (name) {
	coffeeList = name;
	console.log(coffeeList);
	setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');