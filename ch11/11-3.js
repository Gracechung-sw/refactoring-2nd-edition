// 예제 1
// Refactor point: 함수에서 어떤 flag의 조건을 통해서 다른 일을 하도록 로직이 짜여져있는 것
// 이걸 가급적 별개의 함수로 쪼개는 것이 좋고, flag도 사용하지 않는 것이 좋다. 


// 나 뿐만 아니라 외부 사용자. 가 내가 만든 api를 쓰기에 어떤 것이 좋은지 생각해보자. 
// 이전처럼 되어 있었으면 사용자가 '이게 뭐지'라고 api spec을 다 읽어봤어야 하는 거다. 
function setHeight(value) {
  this._height = value;
}

function setWidth(value) {
  this._width = value;
}

// 예제 2 - 중요
// 이것도 위에서 한 얘기랑 마찬가지
// 이전처럼 되어 있었으면 사용자가 'isPremium? 이게 뭐지'라고 api spec을 다 읽어봤어야 하는 거다. 
// 그냥 사용자가 regularBook을 써야하는 경우 이 api를 
// isPremiumBook을 써야 하는 경우 그 api를 쓰도록 하면 되는 거. 
// 그리고 flag로 하다가 갑자기 [어쩌구]Book이 추가되면 어쩔꺼야. 이런 면에서 유지보수, 확장성도 좋지 않다. 
class Concert {
  regularBook(customer){}
  isPremiumBook(customer){}

  #book(customer, isPremium) {}
}

// 예제 3
function switchOn();

function SwitchOff();