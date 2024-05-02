var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) {
    var newUser = {};
    for (var prop in user) {
        newUser[prop] = user[prop];
    }
    console.log("-----> ", newUser);
}