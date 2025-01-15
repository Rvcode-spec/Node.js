const { error } = require('console');
const fs = require('fs')
// fs.writeFileSync('Data.txt' , 'All set the code')

const  path= require('path')
const dir=path.join(__dirname,'Multipal Files');

// for(i=1; i<=5; i++){
//     // fs.unlinkSync(dir+`/Data ${i}.txt` , 'All set the code');
//     fs.writeFileSync(dir+`/Data${i}.txt` , 'All set the code');

    fs.readdir(dir,(error,files)=>{   // Check the Floder file 
       files.forEach((itme)=>{
                console.log(itme);
                
        })

    })

