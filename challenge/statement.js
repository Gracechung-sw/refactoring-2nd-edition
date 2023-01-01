export function statement(invoice, plays){
  return renderPlainText(invoice, plays)
}


export function renderPlainText(invoice, plays) {
  // Refactoring step1. 변수는 사용하는 곳 가까이 있는게 좋다. 즉, 해당 변수가 어디서 쓰이고 있는지 확인한다. 
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    // Refactoring step6. 매번 값에 접근하기보다 필요할 때 질의하는게 좋음. 질의함수로 뺄 수 있는지 확인한다. 
    result += `  ${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${
      perf.audience
    }석)\n`;
  }
  result += `총액: ${format(totalAmounts() / 100)}\n`;
  result += `적립 포인트: ${totalCredits()}점\n`;
  return result;

  function volumeCreditsFor(performance){
    // 포인트를 적립한다.
    let result = Math.max(performance.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === playFor(performance).type) {
      result += Math.floor(performance.audience / 5)
    };
    return result
  }

  function playFor(performance){
    return plays[performance.playID]
  }

  // Refactoring step5. 변수명이 과도하게 생략(perf :( -> performance :))되어있거나 명확하지 않은지 확인한다. 
  function amountFor(performance){
    let result = 0;
    // Refactoring step3. 독자적인 기능을 하는 함수로 뺄 수 있는지 확인한다. 즉, 함수는 하나의 기능만 하고 이 기능을 가장 잘 나타내는 함수명을 가져야 한다. 
    // Refactoring step4. 과도한 if/else나 switch는 '이건 다형성을 이용해 볼 수 있지 않을까?' 하는 생각을 해보는 것이 바람직하다. 
    switch (playFor(performance).type) {
      case 'tragedy': // 비극
        result = 40000;
        if (performance.audience > 30) {
          result += 1000 * (performance.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000;
        if (performance.audience > 20) {
          result += 10000 + 500 * (performance.audience - 20);
        }
        result += 300 * performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(performance).type}`);
    }
    return result
  }

  function totalCredits(){
    // Refactoring step6. 반복문 쪼개기한 후 그 쪼갠 부분을 함수로 뺄 수 있는지 확인하기.
    // let result = 0
    // for (let perf of invoice.performances){
    //   result += volumeCreditsFor(perf)
    // }
    // return result
    // Refactoring step7. 반복문 -> 함수형 프로그래밍으로 파이프라인화 할 수 있는지 확인하기. 
    return invoice.performances.reduce((sum, p) => (sum += volumeCreditsFor(p)), 0)
  }

  function totalAmounts(){
    return invoice.performances.reduce((sum, p) => (sum += amountFor(p)), 0)
  }
}

// Refactoring step2. 함수 안의 함수일 경우, 이게 꼭 함수 내에 있을 필요가 있는지 확인한다. 
// 이 format이 경우, statement 내의 어떤 변수를 참조하는 것도 아니고, 독자적인 기능이 있는 utility 함수에 가까우므로 추출하는게 좋다. 
function format(number){
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number);
}



// 사용예:
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const invoicesJSON = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

const result = statement(invoicesJSON[0], playsJSON);
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';
console.log(result);
console.log(result === expected);
