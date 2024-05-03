// obj
// 2가지 속성
var obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        if (this === global) {
            console.log('this is global');
        } else {
            console.log(this, v, i);
        }
    }
};


// method로서 호출
// obj.logValues(1, 2);


// forEach, map, filter
[4, 5, 6].forEach(obj.logValues);

// var testing = {
//     vals: [1, 2, 3],
//     protests: function (a, b) {
//         console.log(a+1, b+1)
//     }
// };

var testing = {
    vals: [1, 2, 3],
    protests: function (a, b) {
        console.log(a+1, b+1)
    }
};

[1, 2, 3].forEach((a) => {});
// [4, 5, 6].forEach((a) => {});