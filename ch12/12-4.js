/**
 * 매서드 내리기 (Push down method)
 * 만약 A라는 class를 상속하는 B, C, D 라는 class가 있다면
 * B, C, D 각각에서만 특정 method은 거기에서만 사용하도록 하고, 
 * 반드시 공통적인 사항만 super class로 올려야함. 
 */
class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {} // Salesperson에서'만!' 필요한 건 여기에만 정의하자!
}
