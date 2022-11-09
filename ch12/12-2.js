/**
 * 필드 올리기 (Pull up field)
 * 
 * 앞서 12.1.js의 메서드 올리기와 이유는 동일하고, 그냥 이건 필드라는 것만 다르다. 
 */
class Employee {
  #name;
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
