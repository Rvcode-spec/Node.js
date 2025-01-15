const http = require('http');
// Check the Frist Stp-
// http.createServer((req, resp) => {
//     resp.write("First Server Created");
//     resp.end(); // Correctly ends the response
// }).listen(4000, () => {
//     console.log("Server is running on port 4000");
// });

// Sconde Stp- 

function DataCheck(req, resp){
    resp.write("<h1>Second Stp Check the Server</h1>")
    resp.end();

}

http.createServer(DataCheck).listen(4000, ()=>{
    console.log("Server is Runing on post 4000  ");
    
})