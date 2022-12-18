/**
 * 기본형을 객체로 바꾸기
 * Replace Primitive with Object
 *
 */

export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return 'high' === this.priority || 'rush' === this.priority;
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

/**
 * Refactoring point:
 * Order에 대한 highPriorityCount를 계산해주는 로직이 왜 외부에 있을까. 냄새
 */
// const highPriorityCount = orders.filter(
//   (o) => 'high' === o.priority || 'rush' === o.priority
// ).length;

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
