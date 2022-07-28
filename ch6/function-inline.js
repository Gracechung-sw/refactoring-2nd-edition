// 예제 1
// Refactor Point:
// 1. moreThanFiveLateDeliveries에 대단한 비지니스 로직이 있는게 아니고
// 2. 이 조건이 여러 군데에서 쓰여서 조건을 수정하려면(ex. >3) 일일이 다 찾아서 수정해줘야 할 만큼 재사용되고 있지 않다면
// 굳이 함수로 extract해야 했을까? => 이럴 때 Function inline을 사용하는 것이 좋다
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}
