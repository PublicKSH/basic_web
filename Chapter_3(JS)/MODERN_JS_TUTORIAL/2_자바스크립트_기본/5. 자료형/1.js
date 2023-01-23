// 자료형 종류

// 1. 숫자형
let n = 123; n = 12.1234; // 정수형 부동 소수점
inf = 1/0 // infiniiy
inf = Infinity // infiniiy
//nan = tdf/3 // NaN 수학 연산 계산중 에러발생

// 2. BigInt
// 끝에 'n'이 붙으면 BigInt형 자료입니다.
const bigInt = 1234567890123456789012345678901234567890n;

// 3. 문자형
// 따옴표로 묶습니다.
let str = "hello";
let str2 = 'hello2';
let phrase = `can embed another ${str}`;
// 알게된 사실 : ${}는 벡틱안에 들어가야 인식한다(``)
console.log(phrase);

// 4. 불린형
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)


// 5. ‘null’ 값
// null은 오로직 null 값만 포함한다.
let age = null;

// 자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다. 
// 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '
// 널 포인터(null pointer)'를 나타낼 때 사용합니다.

// 하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, 
// ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다

// 6. ‘undefined’ 값
// undefined 값도 null 값처럼 자신만의 자료형을 형성합니다.

// undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.

// 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.
let age2; 
// 명시적으로 할당 가능 
let age3 = undefined;

// 하지만 이렇게 undefined를 직접 할당하는 걸 권장하진 않습니다. 
// 변수가 ‘비어있거나’ ‘알 수 없는’ 상태라는 걸 나타내려면 null을 사용하세요. 
// undefined는 값이 할당되지 않은 변수의 초기값을 위해 예약어로 남겨둡시다.

// 7. 객체와 심볼
//  객체형을 제외한 다른 자료형들은 문자열이든 숫자든 하나만 표현 가능하므로 원시(primitive) 자료형이라 부른다.
// 반면 객체는 복잡한 개체(enitiy)를 표현 가능 

// 심볼은 객체의 고유한 식별자를 만들 때 사용

// 8. typeof 연산자
// typeof 연산자는 인수의 자료형을 반환합니다. 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용합니다.

// typeof 연산자는 두 가지 형태의 문법을 지원합니다.

// 연산자: typeof x
// 함수: typeof(x)

typeof age;
typeof(age);
// 두 문법의 결과는 같다