// 1. Symbol.iterator
let range = {
    from: 1,
    to: 5
  };
  
  // 아래와 같이 for..of가 동작할 수 있도록 하는 게 목표입니다.
  // for(let num of range) ... num=1,2,3,4,5
//   range를 이터러블로 만들려면(for..of가 동작하도록 하려면) 객체에 Symbol.iterator(특수 내장 심볼)라는 메서드를 추가해 아래와 같은 일이 벌어지도록 해야 합니다.

//   for..of가 시작되자마자 for..of는 Symbol.iterator를 호출합니다(Symbol.iterator가 없으면 에러가 발생합니다). Symbol.iterator는 반드시 이터레이터(iterator, 메서드 next가 있는 객체) 를 반환해야 합니다.
//   이후 for..of는 반환된 객체(이터레이터)만을 대상으로 동작합니다.
//   for..of에 다음 값이 필요하면, for..of는 이터레이터의 next()메서드를 호출합니다.
//   next()의 반환 값은 {done: Boolean, value: any}와 같은 형태이어야 합니다. done=true는 반복이 종료되었음을 의미합니다. done=false일땐 value에 다음 값이 저장됩니다.
// 2. 문자열은 이터러블입니다


// 3. 이터레이터를 명시적으로 호출하기

let str = "Hello";

// for..of를 사용한 것과 동일한 작업을 합니다.
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 글자가 하나씩 출력됩니다.
}

// 4. 이터러블과 유사 배열

// 이터러블(iterable) 은 위에서 설명한 바와 같이 메서드 Symbol.iterator가 구현된 객체입니다.
// 유사 배열(array-like) 은 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체입니다.
let arrayLike = { // 인덱스와 length프로퍼티가 있음 => 유사 배열
    0: "Hello",
    1: "World",
    length: 2
  };
  
  // Symbol.iterator가 없으므로 에러 발생
  for (let item of arrayLike) {}

// 5. Array.from

// 범용 메서드 Array.from는 이터러블이나 유사 배열을 받아 ‘진짜’ Array를 만들어줍니다. 이 과정을 거치면 이터러블이나 유사 배열에 배열 메서드를 사용할 수 있습니다.
let arrayLike2 = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike2); // (*)
  alert(arr.pop()); // World (메서드가 제대로 동작합니다.)

//   Array.from엔 ‘매핑(mapping)’ 함수를 선택적으로 넘겨줄 수 있습니다.

// Array.from(obj[, mapFn, thisArg])
// mapFn을 두 번째 인수로 넘겨주면 새로운 배열에 obj의 요소를 추가하기 전에 각 요소를 대상으로 mapFn을 적용할 수 있습니다. 새로운 배열엔 mapFn을 적용하고 반환된 값이 추가됩니다. 세 번째 인수 thisArg는 각 요소의 this를 지정할 수 있도록 해줍니다.
