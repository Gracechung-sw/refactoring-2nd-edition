/**
 * Refactoring point
 * 특이 case가 있다면 (예를 들어 '없음'을 뜻하는 case로 null등을 사용한다면)
 * null 객체, Unknown 객체 등 이를 대표할 수 있는 객체를 생성하는 것이 좋다.
 *
 *  그리고 이 case에서 뭔가를 해줘야 할 때도 그 객체에 로직을 추가할 수 있어서
 * 앞으로 유지보수나 확장성 측면에서도 좋다.
 */

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown'
      ? new unknownCustomer()
      : new Customer(this._customer);
  }
}

class unknownCustomer extends Customer {
  get name() {
    return 'occupant';
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  let customerName;
  /**
   * Refactoring point
   * 이렇게 손님을 알 수 없을 때, unknown 이라는 문자열로 남겨두기보다는,
   * '알 수 없는 손님'을 대표할 수 있고, 나타낼 수 있도록 class를 만드는 것이 좋다.
   */
  customerName = aCustomer.name;
  return customerName;
}
