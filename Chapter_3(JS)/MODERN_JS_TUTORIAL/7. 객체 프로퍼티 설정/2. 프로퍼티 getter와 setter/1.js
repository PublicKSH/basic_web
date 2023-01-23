// 객체의 프로퍼티는 두가지로 나뉜다.
// 첫 번째 종류는 데이터 프로퍼티(data property) 입니다. 
// 지금까지 사용한 모든 프로퍼티는 데이터 프로퍼티입니다.
// 데이터 프로퍼티 조작 방법에 대해선 모두 알고 계실 것이라 생각합니다.

// 두 번째는 접근자 프로퍼티(accessor property) 라 불리는 새로운 종류의 프로퍼티입니다. 
// 접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당합니다. 
// 그런데 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보입니다.

// 1. getter와 setter
// 접근자 프로퍼티는 'getter(획득자)'와 ‘setter(설정자)’ 메서드로 표현됩니다.
// 객체 리터럴 안에서 getter와 setter 메서드는 get과 set으로 나타낼 수 있습니다.
// 문법
let obj = {
    get propName() {
      // getter, obj.propName을 실행할 때 실행되는 코드
    },
  
    set propName(value) {
      // setter, obj.propName = value를 실행할 때 실행되는 코드
    }
  };

// 사용법
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
      }
  };
  
alert(user.fullName); // John Smith
// 접근자 프로퍼티를 사용하면 함수처럼 호출 하지 않고, 일반 프로퍼티에서 값에 접근하는 것처럼 평범하게 user.fullName을 사용해 프로퍼티 값을 얻을 수 있습니다. 

// 2. 접근자 프로퍼티 설명자
// 접근자 프로퍼티는 다음과 같은 설명자를 갖습니다.

// get – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
// set – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
// enumerable – 데이터 프로퍼티와 동일함
// configurable – 데이터 프로퍼티와 동일함
let user2 = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
  alert(user2.fullName); // John Smith
  
  for(let key in user2) alert(key); // name, surname


// 3. getter와 setter 똑똑하게 활용하기
// getter와 setter를 ‘실제’ 프로퍼티 값을 감싸는 래퍼(wrapper)처럼 사용하면, 프로퍼티 값을 원하는 대로 통제할 수 있습니다.

// 4. 호환성을 위해 사용하기
// 기존에 사용하던 프로퍼티의 이름을 바꾸어서 사용할 때 
// getter를 추가하면 문제 해결 가능
// 기존 User에는 this.age = age;가 있었다.
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age는 현재 날짜와 생일을 기준으로 계산됩니다.
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  