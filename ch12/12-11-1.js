/**
 * 슈퍼 클래스를 위임으로 바꾸기 (Replace superclass with delegate)
 * 리팩터링 전처럼 하면 Stack instance에 우리가 원하지 않는 List의 모든 api(method)를 공개 및 사용할 수 있게 되는데, 
 *  이렇게 하면 외부에 우리가 원하는, 우리가 Stack class에 명시한 api(method)만 공개할 수 있고, 
 *   stack class 내부적으로 우리는 구현시 List를 사용하면 된다. 
 */

class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }
}
