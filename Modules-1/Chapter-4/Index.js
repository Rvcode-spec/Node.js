const { isUtf8 } = require('buffer');
const { error } = require('console')
const fs =require('fs')
const path = require('path')
const dirFiles = path.join(__dirname,'CURD Operation')
const filename = `${dirFiles}/Users.txt`;

// fs.writeFileSync(`${dirFiles}/User.txt`, "This Uers Data File")  // Create Frist Stap Complited
// console.log("File created successfully!");

// fs.readFile(filename, 'utf8',(error,file)=>{  //  Read Second Stap Complited
//     console.log(file);
//     console.log("File Read successfully!");
    
// })

// fs.rename(filename,`${dirFiles}/Users.txt`,(error,file)=>{
//         console.log("File Rename successfully");
        
// })

// fs.appendFile(filename,'Only data of text formet Users.txt',(error)=>{
//   if(error)  console.log("File is Updata");
    

// })

fs.unlinkSync(`${dirFiles}/User.txt`);
    console.log("File Delete Successfully");
    


