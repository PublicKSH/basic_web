// 1. 생성자 함수
// 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다. 다만 생성자 함수는 아래 두 관례를 따릅니다.

// 함수 이름의 첫 글자는 대문자로 시작합니다.
// 반드시 'new' 연산자를 붙여 실행합니다.
// new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작합니다.

// 빈 객체를 만들어 this에 할당합니다.
// 함수 본문을 실행합니다. this에 새로운 프로퍼티를 추가해 this를 수정합니다.
// this를 반환합니다.
// 예시를 이용해 new User(...)가 실행되면 무슨 일이 일어나는지 살펴 보도록 하겠습니다.

function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}

// 이름의 '첫 글자가 대문자’인 함수는 new를 붙여 실행해야 한다는 점도 잊지 마세요. 공동의 약속이니까요.

// 2. new.target과 생성자 함수

// 3. 생성자와 return문

// 4. 생성자 내 메서드
