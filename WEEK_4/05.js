
// obj
// 2가지 속성: vals, logValues
var obj = {
	vals: [1, 2, 3],
    // logValues는 함수를 가진다
	logValues: function(v, i) {
        if (this === global) {
            console.log('this is global. I dont want it!')
        } else {
            console.log(this, v, i);
            // this : 본 함수를 출력하는 객체
            // v : 함수의 첫번째 인자
            // i : 함수의 두번째 인자
        }
	}
};

//method로써 호출
// obj.logValues(1, 2);

//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
[4, 5, 6].forEach(obj.logValues);
// 출력 : 
// this is global. I dont want it!
// this is global. I dont want it!
// this is global. I dont want it!
