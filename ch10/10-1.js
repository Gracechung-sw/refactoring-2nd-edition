function calculateCharge(date, quantity, plan) {
  let charge = 0;
  if (isSummer()) {
    charge = quantity * plan.summerRate;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }
  return charge;

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }
}

/**
 * 개인적으로는 굳이 이렇게까지 해야하나 싶지만 그래도 적어두면,
 */
function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

/**
 * 그리고 더 나아가 class로 만든 뒤에, summerCharge, regularCharge등을 getter로 가져다가 쓰게끔 할 수도 있겠지.
 */
