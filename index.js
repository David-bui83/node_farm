const fs = require('fs');
const http = require('http');

//////////////////////////////////////////
// FILE
// Blocking, synchronous way
// const txtIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(txtIn);
// const textOut = `This is what we know about the avacado: ${txtIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written');

// Non-blocking, asychronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   console.log(data1);
//   fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (eer, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written ');
//       });
//     });
//   });
// });
// console.log('will read file!');

//////////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
  res.end('Hello from the server!');
});

const PORT = 8000
server.listen(PORT, '127.0.0.1', () => {console.log(`listening on port ${PORT}`)});