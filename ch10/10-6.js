/**
 * Refactoring point
 * assert는 사용자가 아닌 개발자가 개발하는 과정에서 실수를 하지 않도록 알려주는 용도로 많이 사용된다.
 */
import { strict as assert } from 'node:assert';
class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    // number는 항상 0보다 커야되 실수 하지마
    assert(number >= 0); // 여기가 만족하지 않으면 app이 crashed된다.
    return this.discountRate ? number - this.discountRate * number : number;
  }
}
