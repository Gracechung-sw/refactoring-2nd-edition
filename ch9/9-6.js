/**
 * Replace Magic Literal
 */

const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height; // 9.81 이런 숫자에서는 그 어떠한 의미도 발견하기가 어렵다.
}
