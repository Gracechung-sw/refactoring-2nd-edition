/**
 * 질의 함수와 변경 함수 분리하기 ( = 로직 분리라고 생각하는게 편함. )
 * side effect 가 없는 함수 만들기가 중요. 
 *  side effect가 있다는 건, 함수가 명확한 한 가지 일만 한다 생각하고 짰는데, 우리가 예상하지 못한 side 효과를 발생시키는 경우를 말한다. 
 * 
 */
// 예제 1. Refactoring point: 함수는 단 한 가지의 고유한 일을 수행해야 한다. 
function totalOutstanding() {
  return customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
}

function sendBill() {
  // bill을 보냄.
}



// 예제 2
// Refactoring point: 
// 여기 로직에  1. if문으로 악당을 찾는 로직 하나, 2. 알람을 보내는 로직 둘 이렇게 섞여있다. 이를
// 1. if문으로 악당을 찾는 로직을 별도로 두어야 악당이 변경(Don, Jonh에서 다른 것으로 변경) 되거나 할 때도, 거기'만' 고쳐주면 된다. 
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
  
}

export function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
