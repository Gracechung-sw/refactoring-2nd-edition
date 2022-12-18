/**
 * record 불변성 by 캡슐화
 *
 * 아래처럼 organization에서 set을 없애거나 조건을 달거나.. 해서 가능!
 *
 * 어떤 데이터가 읽기 전용인지 / set 할 수 있는지에 대한 청사진을 만들어 두는 것이 중요.
 * 개발자들간 코드 리딩을 할 때도 의도가 명확해짐.
 */

class Organization {
  #name;
  #country;
  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }
}

const organization = new Organization('Acme Gooseberries', 'GB'); // 객체 literal을 이용한 record

organization.name = 'Dream Coding'; // organization을 불변성으로 만들고 싶었는데, 이렇게 할 수 있음 -> 버그 가능성.
console.log(organization.name);
console.log(organization.country);
