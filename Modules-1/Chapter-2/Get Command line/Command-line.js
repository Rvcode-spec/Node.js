const fs =require('fs')

let Input = process.argv; //  Command link Input code 

if(Input[2]=='add'){      // Add the file 
    fs.writeFileSync(Input[3],Input[4]);
}else if(Input[2]=='remove'){
    fs.unlinkSync(Input[3]);
}else{
    console.log("Code is Invalid");
    
}

