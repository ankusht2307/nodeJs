const { readFileSync, writeFileSync } = require('fs');

console.log('start');
// Read from files sychronously
const first = readFileSync('testFiles/first.txt', 'utf-8');
const second = readFileSync('testFiles/second.txt', 'utf-8');

console.log(first);
console.log(second);

// Write to file sycn
// if file is not present it will create new one
writeFileSync(
  'testFiles/thirdAsync.txt',
  `Written with write file method: ${first} ${second}`,
  { flag: 'a' } // this flag will append to result
);
console.log('end');
console.log('ready for next');
