/**
 * 생성자를 팩터리 함수로 바꾸기. 
 * 생성자를 캡슐화하는 방법임. 
 * 
 * 우리가 생성자를 호출해서 instance를 생성하는데, 이 instance를 만드는 방식도 캡슐화 할 수 있다. 어떻게? 팩토리함수를 통해!
 * 그리고 팩토리 함수를 통해 생성자를 캡슐화 한다면, 외부에서는 생성자를 통해서는 생성할 수 없도록 생성자함수를 private함수로 지정해주는 것이 좋다. 
 * ex. private constructor 어쩌구.
 */
export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) { // 외부에서는 이것만 써서 instance를 생성하도록!
    return new Employee(name, 'E')
  }

  static createSalesman(name) { // 외부에서는 이것만 써서 instance를 생성하도록!
    return new Employee(name, 'S')
  }

  static createSManager(name) { // 외부에서는 이것만 써서 instance를 생성하도록!
    return new Employee(name, 'M')
  }
}

const employee = Employee.createEngineer('Grace') // 복잡한 생성자함수와 내부에 어떤 값이 필요한지 몰라도, 생성자 함수로 그리고, 생성자 함수의 분명한 함수명으로 어떤 걸 써야하는지 사용자는 잘 알 수 있다. 
// 인스턴스를 만드는 로직 자체가 복잡할 때, 이를 캡슐화하고, 외부에서는 간편하게 팩토리 함수를 사용하면 될 수 있도록 할 때 사용한다. 