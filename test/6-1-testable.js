export function printOwing(invoice, console, clock) {

  printBanner(console)

  const outstanding = calculateOutstanding(invoice.orders)
  
  recordDueDate(invoice, clock)

  printDetails(invoice, outstanding, console)
}

function printBanner(console) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(orders) {
  // NOTE: sum과 order 인자를 받아서 반복하면서 sum에 order.amount를 더해갈건데, sum의 초기값은  0이야.
  return orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice, clock) {
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding, console) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

class Clock {
  constructor() {}

  get today() {
    return new Date();
  }
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice, console, new Clock());
