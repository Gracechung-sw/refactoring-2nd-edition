/**
 * Variable Extract 2 Typescript
 */
interface PerchasedItem {
  quantity: number;
  itemPrice: number;
}

export class Order {
  constructor(private perchasedItem: PerchasedItem) {
    this.perchasedItem = perchasedItem;
  }

  get quantity() {
    return this.perchasedItem.quantity;
  }
  get itemPrice() {
    return this.perchasedItem.itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }

  get price() {
    return this.basePrice - this.discount + this.shipping;
  }
}
