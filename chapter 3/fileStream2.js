const fs = require('fs');

// when file is small size
// fs.readFile('./largeFile.txt', (err,file) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log(file)
//     }
// })

// file is big
const readStream = fs.createReadStream('./largeFile.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
})