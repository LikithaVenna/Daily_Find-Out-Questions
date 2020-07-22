'use strict'
const expr = 'Likitha';
switch (expr) {
  case 'Jai':
    console.log('Hi this is jai');
    break;
  case 'Tush':
  case 'Likitha':
    console.log('Hi this is Likitha!!!');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}