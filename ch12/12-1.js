/**
 * 메서드 올리기 (Pull up method)
 * 
 * 한 슈퍼 클래스를 상속받는 여러 서브 클래스에서 모두 공통된 부분이 있다면, 이를 슈퍼 클래스로 빼는 것이 좋음.
 * 슈퍼 클래스로 끌어 올려주는게 좋음. 
 * 그게 메서드 일 때, <메서드 올리기>가 되는 것임. 
 */

// 예시 1
class Employee {
  get name() {}
}

class Salesperson extends Employee {}
class Engineer extends Employee {}

// 예시 2
class Party {
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}
class Employee extends Party {}
