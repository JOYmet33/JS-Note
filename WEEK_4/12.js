// Generator (예: function *)
// *가 붙은 함수가 제너레이터 함수
// 이 함수를 실행하면 -> Iterator 객체가 반환됨

// (1) 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
	setTimeout(function () {
		coffeeMaker.next(prevName ? prevName + ', ' + name : name);
	}, 500);
};

// const prevName = "동수"
// const name = "영희"
// console.log(addCoffee("동수", "영희"))

// (2) 제너레이터 함수 선언
// yiel 키워드로 순서 제어
var coffeeGenerator = function* () {
	var espresso = yield addCoffee('', '에스프레소');
	console.log(espresso);
	var americano = yield addCoffee(espresso, '아메리카노');
	console.log(americano);
	var mocha = yield addCoffee(americano, '카페모카');
	console.log(mocha);
	var latte = yield addCoffee(mocha, '카페라떼');
	console.log(latte);
};

// (3) 호출할 객체 CoffeeMaker 선언
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();