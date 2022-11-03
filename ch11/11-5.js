/**
 * 매개변수를 질의 함수로 바꾸기 (Replace Parameter with Query)
 * Ch6와 유사.
 */
export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    let discountLevel;
    if (this.quantity > 100) discountLevel = 2;
    else discountLevel = 1;
    return this.discountedPrice(basePrice, discountLevel);
  }

  discountedPrice(basePrice, discountLevel) {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}

// ch6 할 때는 이 질의함수로 빼기가 어려웠는데, 한 번 더 보니까 이해감! 