interface PersonName {
  firstName: string;
  lastName: string;
}

class Person {
  private personName: PersonName;
  constructor(personName: PersonName) {
    this.personName = personName
      ? personName
      : { firstName: '마틴', lastName: '파울러' };
  }

  get lastName() {
    return this.personName.lastName;
  }

  get firstName() {
    return this.personName.firstName;
  }
}
