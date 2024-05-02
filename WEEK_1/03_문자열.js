// 2. 문자열 (spring)
// 작은 따옴표(')나 큰 따옴표(")로 감싸서 표현

// 2-1. 문자열 길이(length)
let str = "Hello, world!";
console.log(str.length); // 13

// 2-2. 문자열 결합(concat, concatenation)
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result); // "Hello, world!"

// 2-3. 문자열 자르기(substr, slice)
let str3 = "Hello, world!";
console.log(str3.substr(7, 5)); // "world"
// 의미: str3의 7번째 문자에서 시작하여 5번째 문자 출력
console.log(str3.slice(7, 12)); // "world"
// 의미: str3의 7번째 문자부터 12번째 문자까지 출력

// 2-4. 문자열 검색(search)
let str4 = "Hello, world!";
console.log(str4.search("world")); // 7
// 의미: str4에서 "world"라는 문자는 몇번째에서 시작하는지 출력

// 2-5. 문자열 대체(replace)
let str5 = "Hello, world!";
let result1 = str5.replace("world", "javascript");
// 의미: str5에서 "world"라는 단어를 "javascript"로 대체하여 출력
console.log(result1); // "Hello, javascript"

// 2-6. 문자열 분할(split))
let str6 = "apple, banana, kiwi";
let result2 = str6.split(",");
// 의미: str6에서 ","을 기준으로 분할하여 출력
console.log(result2); // ["apple", "banana", "kiwi"] 