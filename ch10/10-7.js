/**
 * Refactoring point
 * 찾았으면 이거 하고 아니면 계속 해야지 라고 하지 말고
 * 최대한 if (!found) { 이런거 사용하지 않는게 좋다.
 */
for (const p of people) {
  if (p === 'Don') {
    sendAlert();
    break; // break, continue를 통해서 우리가 할 수 있는 것을 제어할 수 있다.
    // 최대한 boolean type의 flag를 사용하지 않는게 좋다.
  }
}
