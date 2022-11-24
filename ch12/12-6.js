/**
 * 타입 코드를 서브 클래스로 바꾸기 (Replace Type Code with subclass)
 * 
 * 아래 문제점 1, 2를 해결하도록 , 외부에서 type을 받지 않고, 각각의 type에 해당하는 subclass를 만들어서 
 * 외부에서는 이 각각의 subclass를 상황에 맞게 쓰도록 하는 것이 좋다. 
 * 
 */
class Employee {
  #name;
  constructor(name, type) {
    this.#name = name;
  }

  get type() {
    return 'employee';
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type(){
    return 'engineer'
  }
}

class Manager extends Employee {
  get type(){
    return 'manager'
  }
}

const ellie = new Engineer('엘리');
const bob = new Manager('밥');
