/**
 * 명령을 함수로 바꾸기
 * 어떤 특정한 데이터와 계산이 프로그램 전반적으로 여기저기 재사용이 된다면, 클래스로 묶어서 필요한 데이터와 이를 계산하는 함수로 묶는게 좋지만
 * 단 한번만 계산이 필요한 경우 class로 만들면 낭비가 있음. 왜?
 * 
 * 함수를 딱 한번만 선언해서 호출하는 것과
 * 필요할 때마다 계속 instance를 생성하는 것에는 메모리 사용 관점에서 봤을 때, 메모리를 많이 사용하기 때문.
 * 
 * new Math().max(1, 2) ->  x
 * Math.max(1, 2) -> o
 * 
 */
export function charge() {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}

