// 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장됩니다.

// 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않습니다.

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // 새로운 빈 객체
  
  // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
  clone.name = "Pete"; // clone의 데이터를 변경합니다.
  
  alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.

//   Object.assign를 사용하는 방법도 있습니다.

//   문법과 동작 방식은 다음과 같습니다.
  
//   Object.assign(dest, [src1, src2, src3...])
//   첫 번째 인수 dest는 목표로 하는 객체입니다.
//   이어지는 인수 src1, ..., srcN는 복사하고자 하는 객체입니다. ...은 필요에 따라 얼마든지 많은 객체를 인수로 사용할 수 있다는 것을 나타냅니다.
//   객체 src1, ..., srcN의 프로퍼티를 dest에 복사합니다. dest를 제외한 인수(객체)의 프로퍼티 전부가 첫 번째 인수(객체)로 복사됩니다.
//   마지막으로 dest를 반환합니다.
// Object.assign을 사용하면 반복문 없이도 간단하게 객체를 복사할 수 있습니다.

let user1 = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

// clone.sizes = user.sizes로 프로퍼티를 복사하는 것만으론 객체를 복제할 수 없습니다. user.sizes는 객체이기 때문에 참조 값이 복사되기 때문입니다. clone.sizes = user.sizes로 프로퍼티를 복사하면 clone과 user는 같은 sizes를 공유하게 됩니다.

// 아래와 같이 말이죠.

let user2 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user.sizes.width++;       // 한 객체에서 프로퍼티를 변경합니다.
alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.
// 이 문제를 해결하려면 user[key]의 각 값을 검사하면서, 그 값이 객체인 경우 객체의 구조도 복사해주는 반복문을 사용해야 합니다. 이런 방식을 '깊은 복사(deep cloning)'라고 합니다.