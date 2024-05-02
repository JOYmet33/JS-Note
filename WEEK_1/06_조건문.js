// 3. 문
// 3-1. 조건문
// if, else, else if

// 3-1-1. if문
let a = "hello world";
if (a.length >= 5) {
    console.log(a.length)
}

// 3-1-2. else문
let b = 10;
if (b > 0) {
    console.log('b는 양수')
} else {
    console.log('b는 음수')
}

// 3-1-3. else if문
let c = -5;
if (c < 0) {
    console.log('negative')
} else if (c >= 0 && c < 10) {
    console.log('small')
} else {
    console.log('big')
}

// 3-2. switch문
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// 반대 default
// case의 마무리 break
let fruit = "banana2";
switch (fruit) {
    case "apple":
        console.log('this is apple');
        break;
    case 'banana':
        console.log('this is banana')
        break;
    default:
        console.log('this is nothing')
        break;
}

// 3-4.조건문의 중첩
let age = 15;
let gender = "female";
// 미성년, 성별 구분
if (age >= 18) {
    if (gender === "female") {
        console.log('she is a woman')
    } else {
        console.log('he is a man')
    }
} else {
    if (gender === "female") {
        console.log('she is a girl')
    } else {
        console.log('he is a boy')
    }
}


// 3-5. 조건부 실행 : and조건(&&)
let d = 10;
(d > 0) && console.log("positive");


// 3-6. 삼항 연산자와 단축 평가
let f; // f는 undefined
let g = f || 10; // f가 존재하지 않는 경우 기본값으로 10 사용
// ||연산자는 false 값을 반환하고, 기본값으로 지정한 10을 반환하는 역할
console.log(d); // 출력결과: 10;


// 3-7. falsy한 값과 truthy한 값
// falsy란? 거짓 같은 값
// truth란? 진실(참) 같은 값
if (0) {
    console.log("이 코드는 실행되지 않습니다.");
  }

  if ("") {
    console.log("이 코드는 실행되지 않습니다.");
  }

  if (null) {
    console.log("이 코드는 실행되지 않습니다.");
  }

  if (undefined) {
    console.log("이 코드는 실행되지 않습니다.");
  }

  if (NaN) {
    console.log("이 코드는 실행되지 않습니다.");
  }

  if (false) {
    console.log("이 코드는 실행되지 않습니다.");
  }

  if (true) {
    console.log("이 코드를 실행합니다.");
  }