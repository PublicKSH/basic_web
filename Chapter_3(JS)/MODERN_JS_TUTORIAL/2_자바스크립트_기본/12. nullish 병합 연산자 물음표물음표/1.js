// a ?? b의 평가 결과는 다음과 같습니다.
// 여러 피연산사 중 값이 확정되어 있는 변수를 찾기 쉽다.

// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b

x = (a !== null && a !== undefined) ? a : b;
// 랑
x = a ?? b // 같다

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

// '??'와 '||'의 차이
// nullish 병합 연산자는 OR 연산자 ||와 상당히 유사해 보입니다. 실제로 위 예시에서 ??를 ||로 바꿔도 그 결과는 동일하기까지 하죠. 관련 내용은 이전 챕터에서 살펴본 바 있습니다.

// 그런데 두 연산자 사이에는 중요한 차이점이 있습니다.

// ||는 첫 번째 truthy 값을 반환합니다.
// ??는 첫 번째 정의된(defined) 값을 반환합니다.