export function acquireReading() {
  return reading;
}

/*
 * Refactoring Point:
 * 6-9.js와 이를 사용하는 6-9-client1.js를 보니,
 * 데이터(reading)과 이를 사용하는 곳(acquireReading, baseRate, 6-9-client1의 baseCharge)가 여기 저기 흩어져있음
 * 책임이 여러 파일, 함수에 흩어져있고 어떤 곳에서도 온전한 하나의 책임을 지고있지 않음. 이를 수정해야함.
 * 서로 연관 된 것 끼지 묶어서 단일 책임, 캡슐화를 해야함.
 */

export class Reading {
  #customer;
  #quantity;
  #month;
  #year;

  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }

  get quantity() {
    return this.#quantity;
  }

  get month() {
    return this.#month;
  }

  get year() {
    return this.year;
  }

  get baseRate() {
    if (this.year === 2017 && this.month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    Math.max(0, base - this.taxThreshold);
  }
}

const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});
