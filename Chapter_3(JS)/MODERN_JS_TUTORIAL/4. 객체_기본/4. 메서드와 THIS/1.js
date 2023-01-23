// 1. 메서드 만들기
let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("안녕하세요!");
  };
  
  user.sayHi(); // 안녕하세요!

//   객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.
// 2. 메서드와 this
// 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다.
// 이때 '점 앞’의 this는 객체를 나타냅니다. 정확히는 메서드를 호출할 때 사용된 객체를 나타내죠.

let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // 'this'는 '현재 객체'를 나타냅니다.
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John

// 3. 자유로운 this

// this 값은 런타임에 결정됩니다. 컨텍스트에 따라 달라지죠.

// 동일한 함수라도 다른 객체에서 호출했다면 'this’가 참조하는 값이 달라집니다

// 4. this가 없는 화살표 함수