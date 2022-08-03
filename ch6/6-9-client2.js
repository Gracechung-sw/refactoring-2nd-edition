import { acquireReading } from './6-9.js';

const reading = acquireReading();
const base = reading.baseCharge;

function taxThreshold(year) {
  return 0.1;
}

export const taxableCharge = Math.max(0, base - taxThreshold(reading.year));
