/**
 * 필드 옮기기(Move Field)
 * Refactoring point
 * 할인률은 계약에 따른 거니까 Customer보다는 CustomerContract class에 있는게 맞지 않을까? 해서 옮겨줌.
 */
export class Customer {
  #name;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday(), discountRate);
  }

  becomePreferred() {
    this.contract.#discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.contract.#discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  constructor(startDate) {
    this.#startDate = startDate;
  }
  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(discountRate) {
    return (this.#discountRate = discountRate);
  }
}
