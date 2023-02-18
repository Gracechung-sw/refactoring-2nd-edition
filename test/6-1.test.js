import { printOwing } from "./6-1-testable";

describe('printOwing', () => {
  it('should print owing', () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: '엘리',
    };
    const expected = '***********************\n' + 
    '**** Customer Owes ****\n' +
    '***********************\n' + 
    'name: 엘리\n' +
    'amount: 7\n' +
    'due: 2/20/2022\n';

    expected(printOwing(invoice).toBe(expected))
    // testable하지 않은 이유 1. 
    // 위와 같이 test를 작성하면 아래 에러가 발생한다. 
    // TypeError: Cannot read properties of undefined (reading 'toBe')
    // 왜냐하면 printOwing함수는 return 값이 None이고, 직접 console.log를 함수 내에서 해주고 있기 때문. 
    // 다시말해 printOwing 함수는 console에 의존 관계가 매우 높다. 
    // 즉, test하기 좋은 코드는 아니다. 
    // 이를 test 하기 좋은 코드, tesable한 코드로 수정하는게 좋다. 
  
    // testable하지 않은 이유 2.
    // const today = new Date();
    // 이런식으로 현재 날짜에 대해 dueDate를 계산하도록 되어있기 때문에 실시간으로 바뀌는 날짜 때문에 test하기 좋지 않다.  
  
    // test하기 좋은 코드로 만들려면
    // 1. 의존해 있는 것들을 내부에서 구현해서 직접 쓰는 것도록 하는 것이 아니라, 외부에서 주입받도록 하는 것이 좋다.
    // (DI; 내부에서 필요로 한 의존성을 외부에서 inject해주는 것. 그리고 이로 인해 test 가능하고, 확장 가능해진다.  )
  })
})