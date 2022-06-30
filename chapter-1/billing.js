function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    volumeCredits += Math.max(perf.audience - 30, 0);

    if ('comedy' === playFor(perf).type)
      volumeCredits += Math.floor(perf.audience / 5); //for 문 돌 대마다 누적. 누적해주는 로직을 따로 함수로 빼자!

    result += `${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += amountFor(perf);
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점 \n`;
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function amountFor(aPerformance) {
  let result = 0;
  // TODO: 조건부 로직을 다형성으로 바꾸기
  // 조건부 로직이 있음. -> 상속 계층을 구성해서 tragedy sub class와 comedy sub class가 각자의 구체적인 계산 로직을 정의하도록 한다.
  switch (playFor(aPerformance).type) {
    case 'tragedy':
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 20);
      }
      break;

    case 'comedy':
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;

    default:
      throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
  }
  return result;
}
