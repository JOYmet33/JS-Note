var count = 0;

// timer : 콜백 내부에서 사용할 수 있는 '어떤 게 돌고있는지'
// 알려주는 id값
var timer = setInterval(function() {
	console.log(count);
	if(++count > 4) clearInterval(timer);
}, 300);

// var count = 0;
var cbFunc = function () {
	console.log(count);
	if (++count > 4) clearInterval(timer2);
};
var timer2 = setInterval(cbFunc, 300);

// 실행 결과
// 0 (0.3sec)
// 1 (0.6sec)
// 2 (0.9sec)
// 3 (1.2sec)
// 4 (1.5sec)