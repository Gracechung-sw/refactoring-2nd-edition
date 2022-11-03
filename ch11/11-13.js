/**
 * 예외를 사전확인으로 바꾸기.
 * 
 */
const values = [];
function getValueForPeriod(periodNumber) {
  // 예외가 아니라 예상할 수 있는 에러라면, 사전확인 및 default값을 처리해주는 것으로 우아하게 처리할 수 있다. 
  return values[periodNumber] ?? 0;
}

