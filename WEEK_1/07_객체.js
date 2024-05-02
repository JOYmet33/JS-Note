// <배열, 객체 기초>
// 1. 객체 생성

// 1-1. 기본적인 객체 생성
// 중괄호({})로 객체 만듦
// 콜론(;)으로 속성과 값을 구분함
// 쉼표(,)로 각 속성과 값을 구분함
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
}
// 1-2. 생성자 함수를 사용한 객체 생성
// 생성자 함수를 사용하면 객체를 일괄적으로 생성할 수 있음
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  let person1 = new Person("홍길동", 30, "남자");
  let person2 = new Person("홍길순", 25, "여자");


// 2. 객체 속성 접근
// 객체 person의 속성에 접근하여 값 출력
// 점(.)으로 객체의 속성에 접근하고 점 뒤에 속성 이름 입력
  console.log(person.name);   // "홍길동"
  console.log(person.age);    // 30
  console.log(person.gender); // "남자"


// 3. 객체 메소드
// 3-1. Object.keys() 메소드

// 3-2. Object.values() 메소드

// 3-3. Object.entries() 메소드

// 3-4. Object.assign() 메소드
let person5 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
  };

  let newPerson = Object.assign({}, person5, {age: 31});

  console.log(newPerson);   // { name: "홍길동", age: 31, gender: "남자" }


// 3-5. 객체 비교
let person3 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
  };
  
  let person4 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
  };
  
  console.log(person3 === person4);   // false
  console.log(JSON.stringify(person3) === JSON.stringify(person4));   // true
// 3-6. 객체 병합




