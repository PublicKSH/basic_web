// 용어: ‘단항’, ‘이항’, ‘피연산자’
// 연산자에 대해 학습하기 전에, 앞으로 자주 등장하게 될 용어 몇 가지를 정리해 보겠습니다.

// 피연산자(operand) 는 연산자가 연산을 수행하는 대상입니다. 
// 5 * 2에는 왼쪽 피연산자 5와 오른쪽 피연산자 2, 총 두 개의 피연산자가 있습니다. 
// '피연산자’는 '인수(argument)'라는 용어로 불리기도 합니다.

// 피연산자를 하나만 받는 연산자는 단항(unary) 연산자 라고 부릅니다. 
// 피연산자의 부호를 뒤집는 단항 마이너스 연산자 -는 단항 연산자의 대표적인 예입니다

// 두 개의 피연산자를 받는 연산자는 이항(binary) 연산자 라고 부릅니다. 
// 마이너스 연산자는 아래와 같이 이항 연산자로 쓸 수도 있습니다.

// 1. 수학

// 덧셈 연산자 +,
// 뺄셈 연산자 -,
// 곱셈 연산자 *,
// 나눗셈 연산자 /,
// 나머지 연산자 %,
// 거듭제곱 연산자 **

// 2. 이항 연산자 '+'와 문자열 연결

let s = "my" + "string";
alert(s); // mystring

// 피연산사중 하나라도 문자열이 있으면 문자열로
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

// 3. 단항 연산자 +와 숫자형으로의 변환
// 숫자에는 아무런 영향을 미치지 않습니다.
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
alert( +true ); // 1
alert( +"" );   // 0

// 형변환 문제
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)


// -는 숫자만 받는다.
// + 는 문자열이 오면 문자열로 계산된다.
// undefined는 숫자형으로 변환시 NaN이 된다.
