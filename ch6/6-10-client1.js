import {
  acquireReading,
  enrichReading,
} from './combine-functions-into-transform.js';

const rawReading = acquireReading(); // 원래 데이터를 받아와서
const reading = enrichReading(rawReading); // 원래 데이터를 확장된 객체로 변환해주는 함수로 넣어주면, 필요한 데이터가 미리 다 계산된 reading 이 반환된다.

console.log(reading.baseCharge);

/*
 * 기존 객체에서 필요한 값을 계산한 객체로 확장. 이름은 보통 enrich를 붙인다.
 * 하지만 이 방법보다는 change-functions-into-class (6-9)에서 한 방법을 요즘 많이 씀.
 */
