const fs = require('fs')
const readableStream = fs.createReadStream('input.txt',{
    highWaterMark: 15
}) 

const writableStream = fs.createWriteStream('output.txt', {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`)
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    writableStream.end();
});

