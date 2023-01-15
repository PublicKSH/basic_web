// 자바스크립트엔 세 종류의 논리 연산자 ||(OR), &&(AND), !(NOT)이 있습니다
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