/**
 * 함수를 명령으로 바꾸기.
 */
export function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
  let highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    healthLevel += 10;
    highMedicalRiskFlag = true;
  }
  let certificationGrade = 'regular';
  if (scoringGuide.stateWithLowCertification(candidate.originState)) {
    certificationGrade = 'low';
    result -= 5;
  }
  // lots more code like this
  result -= Math.max(healthLevel - 5, 0);
  return result;
}

export class ScoringGuide {
  // 이렇게 하나의 함수만 가지고 하나의 명령만 수행하는 class를 명령만 할 수 있는 함수로 만들어지는 class를 command pattern, 
  stateWithLowCertification(state) {
    return state < 5;
  }
}
