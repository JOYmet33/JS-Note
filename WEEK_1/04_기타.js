// 3. 불리언(bool, Boolean)
// 참(true), 거짓(flase)을 나타내는 타입
// 적용: 조건문(if, else, switch 등),
// 적용: 논리 연산자(&&, ||, !)

let bool1 = true;
console.log(bool1); // true
console.log(typeof bool1); // "boolean"

let bool2 = false;
console.log(bool2); // false
console.log(typeof bool2); // "boolean"


// 4. undefined (값이 할당되지 않은 변수)
let x;
console.log(x); // undefined

// 5. null (값이 존재하지 않음)
// uhdefined와는 다름
let y = null;
console.log(y);

// 6. 객체(Object) : key-value pair
// 객체는 속성과 메소드를 가지는 컨데이너
// ({}) 중괄호를 사용
let person = { name: 'Alice', age: 20 };
person.name // 'Alice'
person.age // 20

// 7. 배열(Array)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
// ([]) 대괄호 사용
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];