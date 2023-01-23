// 1. Object.prototype
let obj = {};
alert( obj ); // "[object Object]" ?
// obj = new Object()를 줄이면 obj = {}가 됩니다. 여기서 Object는 내장 객체 생성자 함수인데, 
// 이 생성자 함수의 prototype은 toString을 비롯한 다양한 메서드가 구현되어있는 거대한 객체를 참조합니다.
// 따라서 obj.toString()을 호출하면 Object.prototype에서 해당 메서드를 가져오게 됩니다.
alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true

// 2. 다양한 내장 객체의 프로토타입
// Array, Date, Function을 비롯한 내장 객체들 역시 프로토타입에 메서드를 저장해 놓습니다.
let arr = [1, 2, 3];

// arr은 Array.prototype을 상속받았나요?
alert( arr.__proto__ === Array.prototype ); // true

// arr은 Object.prototype을 상속받았나요?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// 체인 맨 위엔 null이 있습니다.
alert( arr.__proto__.__proto__.__proto__ ); // null


// 체인을 따라 올라가다가 중복 메서드가 있을 때는 체인 상에서 가까운 곳에 있는 메서드가 사용됩니다.

// 3. 원시값
// 문자열과 숫자, 불린값은 객체가 아닙니다
// 원시 타입 값의 프로퍼티에 접근하려고 하면 내장 생성자 String, Number, Boolean을 사용하는 임시 래퍼(wrapper) 객체가 생성됩니다.
// 자료형에 해당하는 래퍼 객체의 메서드를 프로토타입 안에 구현해 놓고 String.prototype, Number.prototype, Boolean.prototype을 사용해 쓰도록 규정합니다.


// 4. 네이티브 프로토타입 변경하기
// 네이티브 프로토타입은 수정할 수 있습니다. String.prototype에 메서드를 하나 추가하면 모든 문자열에서 해당 메서드를 사용할 수 있습니다.

String.prototype.show = function() {
  alert(this);
};

"BOOM!".show(); // BOOM!
// 모던 프로그래밍에서 네이티브 프로토타입 변경을 허용하는 경우는 딱 하나뿐입니다. 바로 폴리필을 만들 때입니다.
// 폴리필은 자바스크립트 명세서에 있는 메서드와 동일한 기능을 하는 메서드 구현체를 의미합니다.

// 5. 프로토타입에서 메서드 빌려오기
// 한 객체의 메서드를 다른 객체로 복사할 때 이 기법이 사용됩니다.
let obj2 = {
    0: "Hello",
    1: "world!",
    length: 2,
  };
  
  obj2.join = Array.prototype.join;
  
  alert( obj2.join(',') ); // Hello,world!