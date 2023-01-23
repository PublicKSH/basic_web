// 1. alert

alert("hello");

// 메시지가 있는 작은 창은 모달 창(modal window) 이라고 부릅니다. 
// '모달’이란 단어엔 페이지의 나머지 부분과 상호 작용이 불가능하다는 의미가 내포되어 있습니다. 
// 따라서 사용자는 모달 창 바깥에 있는 버튼을 누른다든가 하는 행동을 할 수 없습니다. 
// 확인 버튼을 누르기 전까지 말이죠

// 2. prompt
// result = prompt(title, [default]);
// title
// 사용자에게 보여줄 문자열
// default
// 입력 필드의 초깃값(선택값)
// default를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미한다.

let age = prompt('나이를 입력해주세요.', 100);

alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.


// 3. 컨펌 대화 상자
// result = confirm(question);
// 사용자가 확인 버튼을 누르면 true, 그 외의 경우는 false를 반환합니다.
let isBoss = confirm("당신이 주인인가요?");

alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.