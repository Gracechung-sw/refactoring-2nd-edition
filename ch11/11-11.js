/**
 * 수정된 값 반환하기
 */
export function ascentVelocity(totalMinutes) {
  function calculateAscent(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result
  }

  let totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]); // calculateAscent 함수 내부에서 외부 변수인 totalAscent의 값을 직접 변경하고 있다. -> 냄새나는 코드.

  return totalAscent / totalMinutes;
}
