// 번거롭게 하지 말고
// bind 사용

var obj1 = {
	name: 'obj1(정답)',
	func: function () {
		console.log(this.name);
	}
};

setTimeout(obj1.func, 1000);
// 츌력값: undefined
// 이유: this의 호출 주체가 setTimeout 함수이기 때문
// this의 호출자가 함수일 경우 그 값은 window (node는 global)
// window에는 name 속성이 없어 undefined..

//함수 자체를 obj1에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
setTimeout(obj1.func.bind(obj1), 1000);
// bind : obj1.func 함수를 호출 시 this = obj1

var obj2 = { name: 'obj2(정답)' };
//함수 자체를 obj2에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
setTimeout(obj1.func.bind(obj2), 1500);
// bind : obj1.func 함수를 호출 시 this = obj2