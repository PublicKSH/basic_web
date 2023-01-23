let num = 1;
const num2 = 3;

// 상수를 쓰는경우 예시
// 색과 같이 rgb로 기억하기 힘든경우에 사용

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;

// 요악
// var, let, const를 사용해 변수를 선언할 수 있습니다. 선언된 변수엔 데이터를 저장할 수 있죠.

// let – 모던한 변수 선언 키워드입니다.
// var – 오래된 변수 선언 키워드입니다. 잘 사용하지 않습니다. let과의 미묘한 차이점은 오래된 var 챕터에서 다루도록 하겠습니다.
// const – let과 비슷하지만, 변수의 값을 변경할 수 없습니다.
// 변수명은 변수가 담고 있는 것이 무엇인지 쉽게 알 수 있도록 지어져야 합니다.

let admin, name;
name = "John";
admin = name;
//alert(admin);
console.log(admin)
// 새로 배운 내용 : 대문자 상수는 '하드 코딩한' 값의 별칭을 만들 때 사용 (런타임 이전에 평가 되지 않는 변수)
// 예시

const BIRTHDAY = '18.04.1982'; // 대문자 상수로 바꿔도 괜찮을까요?

const AGE = someCode(BIRTHDAY); // 대문자 상수로 바꿔도 괜찮을까요?
