/**
 * 함수 매개변수화 하기 (Parameterize Function)
 *  - 비슷한거 같은데 달라서 함수로 만드는 것이 애매 할 때, 
 *  - 비슷한 부분( = 중복된 부분)을 함수로 뽑아 낼 순 없을까?> 살짝씩 달라지는 내용, 데이터는 매개변수로 받아오는게 어떨까. 
 * 그러면 중복성은 줄이고 유지보수성은 높아진다. 
 */

// 예제 1
function SalaryRaise(person, factor) {
  person.salary = person.salary.multiply(1+factor);
}

// 예제 2
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 + withinBand(usage, 100, 200) * 0.05 + withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value) {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}
