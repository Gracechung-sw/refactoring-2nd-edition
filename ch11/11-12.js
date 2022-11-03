/**
 * 오류 코드를 예외로 바꾸기.
 */
function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  // else return -23; // 이렇게 상수가 그냥 있는 경우. 정말 나쁜 코드. 상수에 이름을 부여해주는게 중요하다.
  else throw new OrderProcessingError(-23) // 특정 경우 에러를 발생시키는 게 좋다. 에러의 의미를 정확하게 나타낼 수 있는 에러를 상속해서 정의한 에러를 사용하는 것이 좋다. 
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}