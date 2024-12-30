// const fs = require('fs');
const http = require('http');
// sysnc way of reading a file
// const textInput = fs.readFileSync('./File System/text.txt', 'utf-8');
// // console.log(textInput);
// // Create a new file
// const textOut = `This is a new file: ${textInput}. \nCreated on ${Date.now()}`;
// fs.writeFileSync('./File System/Output.txt', textOut);
// console.log('File written!');


// Asysnc way of writing a file

// fs.readFile('./File System/start1.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('Error:',err);
//     fs.readFile(`./File System/${data1}.txt`, 'utf-8', (err, data2) => { 
//         console.log(data2);
//         fs.readFile('./File System/Append1.txt', 'utf-8', (err, data3) => {
//             // if (err) return console.log('Error:',err);
//             console.log(data3);
            

//             fs.writeFile('./File System/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written!'); 
                
//             })
//         });
//     });
// });
//    console.log('File read!');
   
///////////////////////////////////////////////////
// Server 

// const Server = http.createServer((req, rsp)=>{
//     console.log(req);
    
//     rsp.end('Hello World!');
// });

//     const home=http.createServer((req, rsp)=>{
//         console.log('Hello Ravi!');
//     })
// Server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000'); 

//    is not working 
// });


// const Server = require('http');
// const Home = require('./home');

// Start the primary server
Server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});

// Start the home server
Home.listen(8001, '127.0.0.1', () => {
    console.log('Home server is running on port 8001');
});

