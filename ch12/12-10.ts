// 하지만 상속은 수정이나 확장이 어렵다.
// 더 자세한 내용은 아래 링크 참고.
// https://github.com/Gracechung-sw/Typescript-TypePython-OOP/blob/main/oop/composition.ts
// https://github.com/Gracechung-sw/Typescript-TypePython-OOP/tree/main/oop

// composition(확장, 위임) 버전
{
  interface PrinterDelegate {
    print(): void;
  }

  class Printer {
    private printerDelegate: PrinterDelegate; // 내부적으로는 PrinterDelegate는 꼭 있어야 하는데,
    constructor(printerDelegate?: PrinterDelegate) {
      // 인자로는 안들어와도 돼
      this.printerDelegate = printerDelegate
        ? printerDelegate
        : new DefaultPrinterDelegate(); // 왜냐하면 인자가 null일 때 내부적으로 DefaultPrinterDeletate를 쓸거니까.
    }

    print() {
      this.printerDelegate.print();
    }
  }

  class DefaultPrinterDelegate implements PrinterDelegate {
    print(): void {
      console.log('기본적인 출력!');
    }
  }

  class RedPrinter implements PrinterDelegate {
    print(): void {
      console.log('빨간색 출력');
    }
  }

  const printers = [new Printer(), new Printer(new RedPrinter())];
  printers.forEach((printer) => printer.print());
}
