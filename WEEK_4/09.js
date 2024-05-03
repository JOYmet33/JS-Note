// 콜백지옥의 예
// 값 전달 순서: 아래 ==> 위
setTimeout(
    function (name) {
      var coffeeList = name;
      console.log(coffeeList);
  
      setTimeout(
        function (name) {
          coffeeList += ", " + name;
          console.log(coffeeList);
  
          setTimeout(
            function (name) {
              coffeeList += ", " + name;
              console.log(coffeeList);
  
              setTimeout(
                function (name) {
                  coffeeList += ", " + name;
                  console.log(coffeeList);
                },
                1500,
                "카페라떼"
              );
            },
            1500,
            "카페모카"
          );
        },
        1500,
        "아메리카노"
      );
    },
    1500,
    "에스프레소"
  );