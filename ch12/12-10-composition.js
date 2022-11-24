// 상속 버전
{
  class Printer {
  print() {
    console.log('기본적인 출력!')
  }
}

class RedPrinter extends Printer {
  print() {
    console.log('빨간색 출력!')
  }
}

const printers = [new Printer(), new RedPrinter()]
printers.forEach((printer) => printer.print())
}

// 하지만 상속은 수정이나 확장이 어렵다. 
// 더 자세한 내용은 아래 링크 참고. 
// https://github.com/Gracechung-sw/Typescript-TypePython-OOP/blob/main/oop/composition.ts
// https://github.com/Gracechung-sw/Typescript-TypePython-OOP/tree/main/oop

// composition(확장, 위임) 버전
{
  class Printer {
  constructor(printerDelegate) {
    this.#printerDelegate = printerDelegate
  }

  print() {
    this.#printerDelegate? this.#printerDelegate.print(): console.log('기본적인 출력!');
  }
}

const printers = [new Printer(), new Printer(new RedPrinter())]
printers.forEach((printer) => printer.print())
}