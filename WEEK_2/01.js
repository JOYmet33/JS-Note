// 배열
// let arr = [1,2,3];

// let newArr = [...arr, 4, '줄리'];
// console.log(newArr) // [1,2,3,4]

// 객체
let user = {name: "nbc", age: 30};
let user2 = {...user}

user2.age = 40

console.log(user.age) // nbc
console.log(user2.age) // nbc2

function callF(func) {
    func()
};

const sayHi = function () {
    console.log('Hi!')
};

callF(sayHi);


function createAdder(num) {
    return function (x) {
        return x + num;
    };
}

const addFive = createAdder(5);

console.log(addFive(10));


const person = {
    name: 'John',
    sayHello: () => console.log(`Hello, my name is ${this.name}`);
  };
  
  person.sayHello(); // "Hello, my name is John" 출력