// 1. 프로퍼티 플래그
// 객체 프로퍼티는 값(value) 과 함께 플래그(flag)라 불리는 특별한 속성 세 가지를 갖습니다.

// writable – true이면 값을 수정할 수 있습니다. 그렇지 않다면 읽기만 가능합니다.
// enumerable – true이면 반복문을 사용해 나열할 수 있습니다. 그렇지 않다면 반복문을 사용해 나열할 수 없습니다.
// configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능합니다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.
// '평범한 방식’으로 프로퍼티를 만들면 해당 프로퍼티의 플래그는 모두 true가 됩니다.
// Object.getOwnPropertyDescriptor메서드를 사용하면 특정 프로퍼티에 대한 정보를 모두 얻을 수 있습니다.
let user = {
    name: "John"
  };

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
alert( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */

// 메서드 Object.defineProperty를 사용하면 플래그를 변경할 수 있습니다.

let user2 = {};

Object.defineProperty(user2, "name", {
  value: "John"
});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');

alert( JSON.stringify(descriptor2, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
// defineProperty를 사용해 프로퍼티를 만든 경우, descriptor에 플래그 값을 명시하지 않으면 플래그 값이 자동으로 false가 됩니다.

// 2. writable 플래그
Object.defineProperty(user, "name", {
    writable: false
  });

user.name = "Pete"; // Error: Cannot assign to read only property 'name'

// 3. enumerable 플래그
//  특정 프로퍼티의 enumerable 플래그 값을 false로 설정하면 for..in 반복문에 나타나지 않게 할 수 있습니다

// 4. configurable 플래그
// configurable 플래그가 false로 설정되어 있다면 해당 프로퍼티는 객체에서 지울 수 없습니다.
// configurable 플래그를 false로 설정하면 돌이킬 방법이 없습니다. defineProperty를 써도 값을 true로 되돌릴 수 없죠.

// 5. Object.defineProperties
// Object.defineProperties(obj, descriptors) 메서드를 사용하면 프로퍼티 여러 개를 한 번에 정의할 수 있습니다.
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
  });

// 6. Object.getOwnPropertyDescriptors
// Object.getOwnPropertyDescriptors(obj) 메서드를 사용하면 프로퍼티 설명자를 전부 한꺼번에 가져올 수 있습니다.
// 이 메서드를 Object.defineProperties와 함께 사용하면 객체 복사 시 플래그도 함께 복사할 수 있습니다.
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));


// 7. 객체 수정을 막아주는 다양한 메서드

