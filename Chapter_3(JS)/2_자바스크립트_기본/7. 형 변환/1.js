// 원시형의 형변환만

// 1. 문자형으로의 변환
let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
alert(typeof value); // string

// 2. 숫자형의로의 변환
// 수학과 관련된 함수와 표현식에서 자동으로 일어납니다.
alert( "6" / "2" );

// Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있습니다.
let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.

alert(typeof num); // number

// 3. 불린형으로 변환
// 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다.
// 그 외의 값은 true로 변환됩니다.

