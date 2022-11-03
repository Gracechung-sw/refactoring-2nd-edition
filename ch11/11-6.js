/**
 * 
 */
targetTemperature(aPlan);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan) {
  currentTemperature = thermostat.currentTemperature; // 어떤 특정 객체에 접근하고 있는데, 이 객체가 
  // 전역 변수이거나 또는 다른 모듈에 있다면, 
  // 불변성에도 안좋고, 다른 모듈과 심각하게 coupling되어 있다는 말이다. 
  // 그래서 이런건 함수 매개변수로 외부에서 전달 받는 것이 좋다. 
  // ...
}


function targetTemperature(aPlan, currentTemperature) {
  currentTemperature = currentTemperature;
    // ...
}
