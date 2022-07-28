export function printOwing(invoice) {
  printBanner();

  let outstanding = calculateOutstanding(invoice.orders);

  // NOTE: 리펙토링 하기 전 코드에서 업데이트, 기록의 역할이 있기 때문에 이를 이름에서도 나타내주는게 좋다.
  // e.g., record, update
  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(orders) {
  // NOTE: sum과 order 인자를 받아서 반복하면서 sum에 order.amount를 더해갈건데, sum의 초기값은  0이야.
  return orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
