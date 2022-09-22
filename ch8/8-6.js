/**
 * 문장 슬라이스하기(Slide Statements)
 * Refactoring point
 *  중복 코드 없애기
 *  그리고 연관있는 코드끼리 모아두기
 */
// 예제 1
const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
