// 1. 숫자
// 1-1. 정수
let num1 = 10;
console.log(num1); //10
console.log(typeof num1); //"number"

// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2); //3.14
console.log(typeof num2); //"number"

// 1-3. 지수형(Exp)
let num3 = 2.5e5; //2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); //"number"

// 1-4. NaN(Not a Number) 숫자가 아님
let num4 = "Hello" / 2; 
console.log(num4); // NaN
console.log(typeof num4); //"number"

// 1-5. 무한대(infinity)
let num5 = 1 / 0;
console.log(num5); //Infinity
console.log(typeof num5); //"number"

// 1-6. 무한대(infinity)
let num6 = -1 / 0;
console.log(num6); //-Infinity
console.log(typeof num6); //"number"