var obj1 = {
	name: 'obj1(정답)',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};


// ---------------------------------

// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj2 = {
	name: 'obj2(정답)',
	func: obj1.func
    //obj1.func = function() {
	// 	          var self = this; //이 부분!
	//            return function () {
	// 		        console.log(self.name);
	// 	            };
	//            }
};
var callback2 = obj2.func();
// obj2.func() = return function () {
	// 		       console.log(self.name);
    //           };

setTimeout(callback2, 1500);

// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3(정답)' };
var callback3 = obj1.func.call(obj3); 
// obj1.func.call(obj3) 뜻 : 
// obj1 func 함수 호출하고
// this의 지칭을 obj3로 변경하여 지칭
// 결론 : 
// obj1.func.call(obj3) =
// return function () {
    // console.log(obj3.name); // 여기!
	// };
	// }
    // 출력값 : obj3(정답)

setTimeout(callback3, 2000);


// obj1.func.call(obj3)



