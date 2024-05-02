//위 패턴을 우리 예제에 적용해봅시다.
// #얕은 복사 예시

// (이전 패턴 가져옴)
var copyObject = function (target) {
	var result = {};
	for (var prop in target) {
		result[prop] = target[prop];
	}
	return result;
}

var user = {
	name: 'wonjang',
	gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'twojang';

if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2);