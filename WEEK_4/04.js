Array.prototype.map123 = function (callback, thisArg) {

    // map 함수에서 return할 결과 배열
    var mappedArr = [];

    // 반복문 for 사용
    for (var i = 0; i < this.length; i++) {
        // 여기서 this는 아래 map123을 호출하는 객체인 [1, 2, 3]
        // 따라서 this.length는 3이고, for문은 3번 반복한다

        // 반복할 for문의 내용
        mappedValue = callback.call(thisArg || global, this[i]);
        // 즉시 실행 함수인 call 사용
        // map123 함수의 두번째 인자인 thisArg에 값이 있다면 thisArg로 callback 함수를 실행해줘!
        // 두번째 인자에 thisArg 값이 없다면 global로 callback 함수를 실행해줘!

        mappedArr[i] = mappedValue;
        // mappedValue 값을 배열 mappedArr의 i번째로 넣어줘 
    };
    //function 끝
    return mappedArr;
};

var newArr = [1, 2, 3].map123(function (number) {
    return number * 2
});

console.log(newArr)
