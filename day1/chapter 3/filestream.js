const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt.gz')
// writting file to another file
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// })

// writing into file using pipe
readStream.pipe(writeStream);

// file compressing
readStream.pipe(gzip).pipe(writeStream);