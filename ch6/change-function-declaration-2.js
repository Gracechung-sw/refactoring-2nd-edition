export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // Refactoring Point: boolean value마다 처리를 다르게 해줘야 하는 경우 (이 boolean variable을 flag라고 한다.)
  // 이렇게 하는건 좋지 않다. 어떻게 하면 좋은지는 다음에 다룬다.
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
