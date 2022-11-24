/**
 * 슈퍼 클래스 추출하기 (Extract superclass)
 */

class Party {
  get annualCost() {}
  get name() {}
}
class Department extends Party{
  get headCount() {}
}

class Employee extends Party{
  get id() {}
}
