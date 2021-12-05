const fs = require('fs');

fs.appendFile('example2.txt','Some data is appended', (err) => {
    if(err)
        console.log(err);
    else
        console.log('Successfully append data to the file')
})