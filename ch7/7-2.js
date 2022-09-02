export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses]; // 새로운 배열을 만들어서 전달. 그래서 외부에서 이렇게 전달받은 데이터를 수정하더라도 기존 데이터에는 영향을 미치지 않음.
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index == -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
/**
 * Refactor point: 읽어온 courses data를 외부에서 마음대로 update, delete할 수 있음.
 *
 * 그래서 data에 대해 할 수 있는 동작만 외부에 공개하는 캡슐화가 필요.
 */
// ellie.courses.push(new Course('리팩토링', true));
const course = new Course('리팩토링', true);
ellie.addCourse(course);

ellie.removeCourse(course, () => {
  console.log('no course');
});
console.log(ellie.courses.length);
