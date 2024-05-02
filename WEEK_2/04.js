// Set
// - 고유한 값을 저장하는 자료구조
// - 값만 저장
// - 키는 저장 x
// - 값이 중복되지 않는 유일한 요소로만 구성
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");
mySet.add("value5");
mySet.add("value8");

console.log(mySet.size); // 출력: 5
console.log(mySet.has("value1")); // 출력: true
console.log(mySet.has("value2")); // 출력: true
console.log(mySet.has("value4")); // 출력: false

// Iterator, 반복문
for (const value of mySet.values()) {
    console.log(value);
} // 출력: value1, value2, value3, value5, value8