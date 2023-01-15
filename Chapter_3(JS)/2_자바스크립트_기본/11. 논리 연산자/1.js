// 자바스크립트엔 세 종류의 논리 연산자 ||(OR), &&(AND), !(NOT)이 있습니다

// 1. or ||
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

//  이제 자바스크립트에서만 제공하는 논리연산자 OR의 '추가’기능에 대해 알아보겠습니다.
// OR 연산자와 피연산자가 여러 개인 경우
// 이때, OR ||연산자는 다음 순서에 따라 연산을 수행합니다.

// 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
// 각 피연산자를 불린형으로 변환합니다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
// 피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환합니다.

let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛
// 이때 변수가 모두 "" 이였으면 익명을 출력 했을 것

true || alert("not printed");
false || alert("printed");


// 2. and &&
// or과 비슷하게 동작
// AND 연산자는 첫 번째 falsy를 반환합니다. 피연산자에 falsy가 없다면 마지막 값을 반환합니다.

// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0

// 3. ! (NOT)

// 1. 피연산자를 불린형(true / false)으로 변환합니다.
// 2. 1에서 변환된 값의 역을 반환합니다.
// NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.

alert( !!"non-empty string" ); // true
alert( !!null ); // false