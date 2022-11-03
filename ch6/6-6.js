/**
 * Encapsulate variable
 */
// Refactoring Point: 아래와 같이 외부에서 defaultOwner 값에 getDefaultOwner()함수를 통해 접근만 가능하지 값의 수정은 할 수 없음으르 의도.
//  하지만 아래 코드는 의도대로 동작하지 않는다. 왜?? defaultOwner는 객체. 즉, mutable하다.
//  즉, getDefaultOwner()같은 getter에서 객체는 참조값 형태로 전달되기 때문에 객체를 여기저기 전달하는 것은 굉장히 위험한 일이다.
/**
 * 즉, 아래와 같이 사용할 경우
 * cosnt owner = getDefaultOwner();
 * owner.setName('현정');
 * console.log(owner);
 * console.log(getDefaultOwner());
 * { name: '현정' lastName: '파울러' }; 로 값이 변경됨.
 */
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// 방법 1. 객체를 복사해서 새로운 객체를 반환
export function getDefaultOwner() {
  return { ...defaultOwner }; // 한 depth의 복사만 됨.
}

// 방법2. class 생성

defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });
class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}
