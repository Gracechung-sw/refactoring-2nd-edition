/**
 * 타입 코드를 서브 클래스로 바꾸기 (Replace Type Code with subclass)
 * 
 * 아래 문제점 1, 2를 해결하도록 , 외부에서 type을 받지 않고, 각각의 type에 해당하는 subclass를 만들어서 
 * 외부에서는 이 각각의 subclass를 상황에 맞게 쓰도록 하는 것이 좋다. 
 * 
 */
class Employee {
  #name;
  #type;
  constructor(name, type) { // 문제점 1. 11장에서 했던 내용. 외부 사용처에선 어떤 type이 있는지 모른다. type같은 flag를 사용하는 대신, type에 따라 사용할 api를 그냥 마련해놓자. 
    // this.validateType(type); // 문제점 1 때문에 type validation이 필요해서 여기서 이렇게 해준 것 같다. 
    this.#name = name;
    this.#type = type;
  }

  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`); // 문제점 2. 그런데 생성자에서 에러를 던지는 건 정말 나쁜 practice이고, 이를 써서 validate를 하지 않아도 되도록 애초에 코드를 짜는 것이 좋다. 
    }
  }

  get type() {
    return this.#type;
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

const ellie = new Employee('엘리', 'engineer');
const bob = new Employee('밥', 'manager');
