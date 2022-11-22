const { readFile, writeFile } = require('fs');

console.log('start');
// reads file in async manner
// if we don't pass 'utf-8' we will get buffer in response
readFile('testFiles/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;

  readFile('testFiles/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);

    const second = result;

    writeFile(
      'testFiles/thirdAsync.txt',
      `Here is the async output: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('end');
      }
    );
  });
});
console.log('ready for next task');
