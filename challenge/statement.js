class Performance {
  #audience
  #play
  constructor(audience, play){
    this.#audience = audience
    this.#play = play
  }

  get play() {
    return this.#play
  }

  get audience() {
    return this.#audience
  }

}

class TragedyPerformance extends Performance {
  get credits() {
    let result = Math.max(this.audience - 30, 0);
    return result
  }

  get amount() {
    let result = 40000;
    if (this.audience > 30) {
      result += 1000 * (this.audience - 30);
    }
    return result
  }
}

class ComedyPerformance extends Performance {
  get credits() {
    let result = Math.max(this.audience - 30, 0);
    result += Math.floor(this.audience / 5)
    return result
  }

  get amount() {
    let result = 30000;
    if (this.audience > 20) {
      result += 10000 + 500 * (this.audience - 20);
    }
    result += 300 * this.audience;
    return result
  } 
}

export function statement(invoice, plays){
  // Refactoring point: statement라는 함수가 있는데, 어떤 흐름을 따라가면서 리턴값이 완성되는지, 한눈에 알 수 있도록 함수를 작성하고 싶다. 
  // 그래서 함수명도 그 흐름과 역할이 잘 드러나게 지어야 한다. 
  const statement = createStatement(invoice, plays);
  return renderPlainText(statement);
}

export function htmlStatement(invoice, plays){
  const statement = createStatement(invoice, plays);
  return renderHTMLText(statement);
}

function createStatement(invoice, plays){
  const statement = {};
  statement.customer = invoice.customer;
  // statement.performances = invoice.performances;
  // Refactoring 방법 1. (책에서 소개한 방법). performances를 for loop 돌면서, 우리가 performance에서 필요한 정보들을 담고 있는 새로운 객체를 생성시킨다. 
  statement.performances = invoice.performances.map(p => new Performance(p.audience, plays[p.playID]))
  statement.totalAmounts = totalAmounts(statement.performances)
  statement.totalCredits = totalCredits(statement.performances)
  return statement;

  function totalCredits(performances){
    // Refactoring step6. 반복문 쪼개기한 후 그 쪼갠 부분을 함수로 뺄 수 있는지 확인하기.
    // let result = 0
    // for (let perf of invoice.performances){
    //   result += volumeCreditsFor(perf)
    // }
    // return result
    // Refactoring step7. 반복문 -> 함수형 프로그래밍으로 파이프라인화 할 수 있는지 확인하기. 
    return performances.reduce((sum, p) => (sum += p.credits), 0)
  }

  function totalAmounts(performances){
    return performances.reduce((sum, p) => (sum += p.amount), 0)
  }

  
}



// Refactoring point: renderPlainText의 책임이 과연 1개인가?
// 지금은 역할 1. invoice와 plays를 받아서 전체적인 금액과 적립금을 계산하는 일 (즉, 데이터 가공)
// 역할2. 어떻게 출력. 
// 이렇게 책임이 2개가 같이 있다. 이 경계를 잘 나누는게 좋다.
// 사용자가 input한 데이터를 가공하는 것과 실제 실행하는 것을 나눠야 한다. (example. 6-11-2.js)
export function renderPlainText(statement) {
  // Refactoring step1. 변수는 사용하는 곳 가까이 있는게 좋다. 즉, 해당 변수가 어디서 쓰이고 있는지 확인한다. 
  let result = `청구 내역 (고객명: ${statement.customer})\n`;

  for (let perf of statement.performances) {
    // Refactoring step6. 매번 값에 접근하기보다 필요할 때 질의하는게 좋음. 질의함수로 뺄 수 있는지 확인한다. 
    result += `  ${perf.play.name}: ${format(perf.amount / 100)} (${
      perf.audience
    }석)\n`;
  }
  result += `총액: ${format(statement.totalAmounts / 100)}\n`;
  result += `적립 포인트: ${statement.totalCredits}점\n`;
  return result;
}

export function renderHTMLText(statement) {
  let result = `<h1>청구 내역 (고객명: ${statement.customer})\n</h1>`;
  for (let perf of statement.performances) {
    result += `  ${perf.play.name}: ${format(perf.amount / 100)} (${
      perf.audience
    }석)\n`;
  }
  result += `총액: ${format(statement.totalAmounts / 100)}\n`;
  result += `적립 포인트: ${statement.totalCredits}점\n`;
  return result;
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
