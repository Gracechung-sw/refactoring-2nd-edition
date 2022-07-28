// Refactor point: 함수에서 필요한 값, property만 인자로 넘기는 것이 좋다.
//  예를 들어 아래 예시의 리팩토링 전(See commit history)에서는 결국 필요한 건 state인데, aCustomer를 받아놓고, 정작 사용하는건 aCustomer.address.state이므로
//  state만 있는 곳에서는 아래 함수를 재사용하기가 어려울 것이다.

export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
