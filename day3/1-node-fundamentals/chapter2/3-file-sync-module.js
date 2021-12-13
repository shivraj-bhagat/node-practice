const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first,second)

// flag a is to indicate the writefilesync to append to the file
writeFileSync('./content/result.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})

console.log('done with the task');
console.log('starting the next one');