// 1. 배열 분해하기
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// `rest`는 배열입니다.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
// 2. 객체 분해하기

// 3. 중첩 구조 분해
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
  let {
    size: { // size는 여기,
      width,
      height
    },
    items: [item1, item2], // items는 여기에 할당함
    title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut
// 4. 똑똑한 함수 매개변수
