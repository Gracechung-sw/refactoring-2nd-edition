/**
 * Replace Derived Variable with Query
 *
 * class는 값이 변하는 변수를 가지고 있다. 외부에서 값을 변경할 수도 있고, 내부적으로 변경할 수도 있다.
 * 이 때 한 변수의 값이 변경이 다른 함수에 영향을 미치는 경우라서 field마다 다 수정이 들어가야한다.
 * 그리고 수정해줄 때 실수라도 한다면..?

 * 따라서 어떤 데이터가 변해서, 그에 따라 다른 데이터에도 변화가 발생되어야 한다면,
 * 필요한 경우에 실시간으로 바로 계산 할 수 있도록 질의함수로 만드는 것이 좋다. 
 */

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
