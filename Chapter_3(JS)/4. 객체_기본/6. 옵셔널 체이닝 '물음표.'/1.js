// 1. 옵셔널 체이닝이 필요한 이유

// 사용자가 여러 명 있는데 그중 몇 명은 주소 정보를 가지고 있지 않다고 가정해봅시다. 이럴 때 user.address.street를 사용해 주소 정보에 접근하면 에러가 발생할 수 있습니다.

// let user = {}; // 주소 정보가 없는 사용자

// alert(user.address.street); // TypeError: Cannot read property 'street' of undefined
// 또 다른 사례론 브라우저에서 동작하는 코드를 개발할 때 발생할 수 있는 문제가 있습니다. 자바스크립트를 사용해 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오려 하면 문제가 발생하죠.

// // querySelector(...) 호출 결과가 null인 경우 에러 발생
// let html = document.querySelector('.my-element').innerHTML;
// 명세서에 ?.이 추가되기 전엔 이런 문제들을 해결하기 위해 && 연산자를 사용하곤 했습니다.
// let user = {}; // 주소 정보가 없는 사용자

// alert( user && user.address && user.address.street ); // undefined, 에러가 발생하지 않습니다.

// 2. 옵셔널 체이닝의 등장
let user = {}; // 주소 정보가 없는 사용자

alert( user?.address?.street ); // undefined, 에러가 발생하지 않습니다.
// 참고로 위 예시에서 사용된 user?.는 user가 null이나 undefined인 경우만 처리할 수 있습니다.

// 3. 단락 평가

// ?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춥니다. 참고로 이런 평가 방법을 단락 평가(short-circuit)라고 부릅니다.

// 그렇기 때문에 함수 호출을 비롯한 ?. 오른쪽에 있는 부가 동작은 ?.의 평가가 멈췄을 때 더는 일어나지 않습니다.
// 4. ?.()와 ?.[]
// ?.() 를 사용하면 객체의 존재유무를 알 수 없는 함수를 안전하게 사용할 수 있고
// ?.[] 를 사용하면 객체의 존재유무를 알 수 없는 프로퍼티를 안전하게 읽을 수 있다.