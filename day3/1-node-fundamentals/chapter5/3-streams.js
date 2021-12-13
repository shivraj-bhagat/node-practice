const { writeFileSync, createReadStream } = require('fs');

// for(let i = 0 ; i < 1000; i++) {
//     writeFileSync('./content/big.txt', `Hello world ${i}\n`, {flag: 'a'});
// }

const stream = createReadStream('./content/big.txt',{encoding: 'utf-8', highWaterMark: 6400});

stream.on('data', (result) => {
    console.log(result);
    stream.pause();
    console.log('There will be no additional data for 1 second.');
    setTimeout(() => {
        console.log('Now data will start flowing again.');
        stream.resume();
    }, 1000);
})

stream.on('error', (err) => {
    console.log(err)
})