/**
 * Change Reference to Value
 * 값 value - 불변. 특히 원시타입. 이게 무슨 말이냐면,
 *  a = 1 일 때 a에 2라는 값을 재할당할 수는 있지만 1이라는 값 자체를 2로 변경할 수는 없음 .
 *
 * 참조 Reference - 가변. 특히 object.
 * a = {} 이 object 데이터 자체의 변경이 가능함.
 */
class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    // return this.#telephoneNumber 로 바로 리턴한다면, 외부에서 person.telephoneNumber.number = '010-90....' 이런 식으로 변경할 수가 있음.
    // 그래서 문자열 형식으로 반환.
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    // 이렇게 변경이 있다면 참조를 통한 업데이트가 아니라
    // 참조를 값으로 만들어서 , 값을 변경한다.
    this.#telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    this.#telephoneNumber.number = new TelephoneNumber(
      this.officeAreaCode,
      value
    );
  }

  set officeNumber(value) {
    this.#telephoneNumber.number = value;
  }
}

class TelephoneNumber {
  /**
   * Set을 다 없애고,
   * 내 데이터 중에, 뭐 하나라도 바뀌는게 있으면 그냥 새로운 instance하나 만들어,
   * 나는 불변성이야.
   *
   * 이렇게 간다.
   */
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  get number() {
    return this.#number;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
