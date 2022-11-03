/**
 * 함수 옮기기(Move function) - 클래스 내에서의 함수 옮기기.
 * Refactoring point
 *  get overdraftCharge() { 는 type이 isPremium인지 아닌지에 따라서 결과값이 달라짐. 즉, type에 더 의존성이 높다고 볼 수 있음.
 *  따라서 Account보다는 AccountType class로 옮겨보는게 좋을 것 같음.
 */
export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }

  overdraftCharge(daysOverdrawn) {
    // Q. 인자를 받을 때는 get이 될 수 없다?
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    }
    const baseCharge = 10;
    return daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
