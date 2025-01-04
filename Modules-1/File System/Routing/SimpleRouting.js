const http = require('http');
// const { server } = require('typescript');
const url = require('url');

 const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/Home') {
        res.end('This is the home page');
    } else if (pathName === '/product') {
        res.end('This is the product page');
    } else  if(pathName=== '/about'){
        res.end('This is the about page');
        } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header' : 'Hello, World!'
        });
        res.end('<h1>This page is not Found!</h1>');
    }
});
    

server.listen(8000,'127.0.0.1',()=>{
    console.log('server is running at http://127.0.0.1:8000')
});

