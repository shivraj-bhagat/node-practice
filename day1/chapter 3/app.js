const fs = require('fs');

// creating the folder
// fs.mkdir('tutorial', (err) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log('Successfully created the folder');
//         fs.writeFile('./tutorial/example.txt', 'Here some data', (err) => {
//             if(err)
//                 console.log(err)
//             else
//                 console.log('successfully created the file')
//         })
//     }
        
// })

// // deleting the file
// fs.unlink('./tutorial/example.txt', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully deleted the file');
// })
// // deleting the folder
// fs.rmdir('tutorial', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully deleted the folder');
// })

// deleting multiple files
fs.readdir('example', (err, files) => {
        if(err)
            console.log(err);
        else {
            console.log(files) 
            for(let file of files) {
                // console.log(file)
                fs.unlink('./example/'+ file, (err) => {
                    if(err)
                        console.log(err);
                    else
                        console.log('Successfully deleted the file ' + file);
                })
            }
        }
})