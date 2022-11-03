/**
 * Change Value to Reference
 *
 * 주문(Order)는 항상 누가 주문했는지 고객의 정보가 있음.
 */
const customerRepository = new CustomerRepository();
const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);
class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer; // 이건 고객 1명당 1나씩만 가지고 있는, 중복되지 않는 Instance이어야 할 경우.
    // 하나의 application에서 하나의 customer instance가 있다는 것을 보장하기 위해 repository pattern을 사용할 수 있다.
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
