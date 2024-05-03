// Promise
// 이전에 썼던 방법 : then(그러면~)
// 이번에 쓸 방법 : async(비동기) / await(기다리다)

// coffeeMaker 함수를 호출할 함수 addCoffee를 선언
// Promise를 반환
var addCoffee = function (name) {
	return new Promise(function (resolve) {
		setTimeout(function(){
			resolve(name);
		}, 500);
	});
};

//
var coffeeMaker = async function () {
	var coffeeList = '';
	var _addCoffee = async function (name) {
		coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
	};

    // promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때까지 기다린다.

    // 가정: _addCoffee('에스프레소') 로직이 실행되는데 100초가 걸린다?
	await _addCoffee('에스프레소');
    // console.log는 100초 뒤 실행 ...
	console.log(coffeeList);

	await _addCoffee('아메리카노');
	console.log(coffeeList);
	await _addCoffee('카페모카');
	console.log(coffeeList);
	await _addCoffee('카페라떼');
	console.log(coffeeList);
};
coffeeMaker();
