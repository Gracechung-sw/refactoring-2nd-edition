import { getDefaultOwner } from './encapsulate-variable.js';

const owner = getDefaultOwner();
owner.firstName = '엘리';
console.log(owner);
console.log(getDefaultOwner());
