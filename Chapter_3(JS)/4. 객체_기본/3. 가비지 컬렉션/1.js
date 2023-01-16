// 자바스크립트는 도달 가능성(reachability) 이라는 개념을 사용해 메모리 관리를 수행합니다.

// ‘도달 가능한(reachable)’ 값은 쉽게 말해 어떻게든 접근하거나 사용할 수 있는 값을 의미합니다. 
// 도달 가능한 값은 메모리에서 삭제되지 않습니다.

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

//   내부 알고리즘
// 'mark-and-sweep’이라 불리는 가비지 컬렉션 기본 알고리즘에 대해 알아봅시다.
// '가비지 컬렉션’은 대개 다음 단계를 거쳐 수행됩니다.

// 가비지 컬렉터는 루트(root) 정보를 수집하고 이를 ‘mark(기억)’ 합니다.
// 루트가 참조하고 있는 모든 객체를 방문하고 이것들을 ‘mark’ 합니다.
// mark 된 모든 객체에 방문하고 그 객체들이 참조하는 객체도 mark 합니다. 한번 방문한 객체는 전부 mark 하기 때문에 같은 객체를 다시 방문하는 일은 없습니다.
// 루트에서 도달 가능한 모든 객체를 방문할 때까지 위 과정을 반복합니다.
// mark 되지 않은 모든 객체를 메모리에서 삭제합니다.