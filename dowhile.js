'use strict'
let result = '';
let i = 0;
do {
  i = i + 1;
  result = result + i;
  console.log(i)
} while (i < 5);

console.log(`Current value of i is ${i}`);