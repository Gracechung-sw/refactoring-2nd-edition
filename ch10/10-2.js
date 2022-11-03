/**
 * Refactoring point
 *  조건식으로 수행해주는 로직이 같다. (return 0)
 *  그러니까 이걸 굳이 왜 해주는거지? 라는 의문이 든다. 즉, 코드의 의미가 명확하지 않다.
 *
 *  특정한 코드가 수행된다면, 조건식을 하나로 묶은 뒤
 *  하나의 표현식으로 빼주는게 좋다.
 */
function disabilityAmount(employee) {
  return isNotEligibleForDisability(employee) ? 0 : 1;

  function isNotEligibleForDisability(employee) {
    return (
      employee.seniority < 2 ||
      employee.monthsDisabled > 12 ||
      employee.isPartTime
    );
  }
}
