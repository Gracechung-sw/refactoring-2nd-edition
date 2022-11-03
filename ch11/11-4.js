/**
 * 객체 통째로 넘기기 (Preserve Whole Object)
 *  함수에 어느정도의 인자를 전달 할 것인가에 관련된 것. 
 *  매개변수 범위 규정하기. 
 *  다른 모듈과의 의존성을 잘 살펴보고 범위를 규정해나가야함.
 */
export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low && range.top <= this._temperatureRange.high
    );
  }
}
