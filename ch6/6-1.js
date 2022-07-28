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
  let result = 0;
  for (const order of orders) {
    result += order.amount;
  }
  return result;
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
