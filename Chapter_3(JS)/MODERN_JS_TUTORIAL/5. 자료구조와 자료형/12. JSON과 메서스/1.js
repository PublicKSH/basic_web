// 1. JSON.stringify

// JSON (JavaScript Object Notation)은 값이나 객체를 나타내주는 범용 포맷으로, RFC 4627 표준에 정의되어 있습니다. JSON은 본래 자바스크립트에서 사용할 목적으로 만들어진 포맷입니다. 그런데 라이브러리를 사용하면 자바스크립트가 아닌 언어에서도 JSON을 충분히 다룰 수 있어서, JSON을 데이터 교환 목적으로 사용하는 경우가 많습니다. 특히 클라이언트 측 언어가 자바스크립트일 때 말이죠. 서버 측 언어는 무엇이든 상관없습니다.

// 자바스크립트가 제공하는 JSON 관련 메서드는 아래와 같습니다.

// JSON.stringify – 객체를 JSON으로 바꿔줍니다.
// JSON.parse – JSON을 객체로 바꿔줍니다.
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); // 문자열이네요!
  
  alert(json);
  /* JSON으로 인코딩된 객체:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "wife": null
  }
  */


// 2. replacer로 원하는 프로퍼티만 직렬화하기


// 3. space로 가독성 높이기


// 4. 커스텀 “toJSON”


// 5. JSON.parse

// JSON.parse를 사용하면 JSON으로 인코딩된 객체를 다시 객체로 디코딩 할 수 있습니다.

// 6. reviver 사용하기

