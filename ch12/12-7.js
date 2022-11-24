/**
 * 서브 클래스 제거하기 (Remove subclass)
 *  굳이 서브 클래스를 사용해야하는 use case나 다형성이 필요한 경우가 아니라면, 그 때 사용
 *  
 */
class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  get isMale() {
    return this.#genderCode === 'M'
  }

  static create(record) {
    switch (record.gender) {
      case 'M':
        return new Person(record.name, 'M');
      case 'F':
        return new Female(record.name, 'F');
      default:
        return new Person(record.name, 'X');
    }
  }
}

function loadFromInput(data) {
  const result = [];
  data.forEach((record) => {
    result.push(Person.create(record));
  });
  return result;
}

const people = loadFromInput([
  { name: '엘리', gender: 'F' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = people.filter((p) => p.isMale()).length;
console.log(numberOfMales);
