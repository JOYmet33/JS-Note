// for문
// for (초기값; 조건; 증감) {}

// 예시1.
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// };

// 예시2.
// for (let a = 0; a < 11; a++) {
//     if (a % 2 === 0) {
//         console.log(a)
//     }
// }

// whlie문
// let a = 4;
// while (a < 100) {
//     if (a % 5 === 0 && a >= 5) {
//         console.log(a);
//     }
//     a++;
// }


// do ... while문


// break와 continue의 차이
for (let b = 0; b < 11; b++) {
    if (b === 5) {
        break; //for문을 깨고 나간다
    }
    console.log("break문---> " + b);
};

for (let b = 0; b < 11; b++) {
    if (b === 5) {
        continue;//그 다음 순서로 넘어간다
    }
    console.log("continue문---> " + b);
};

