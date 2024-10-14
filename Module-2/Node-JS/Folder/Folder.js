// const {mkdir} = require('fs')

// mkdir('./Node-JS/Folder/Photos', {recursive:true}, function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Folder created successfully");
        
//     }
// })

// Append the Code

const {mkdir, appendFile} = require('fs')
mkdir('./Node-JS/Folder/Photos', {recursive:true}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Appendfile the add successfully");

        appendFile('./Node-JS/Folder/Photos/text.tex' ,"Hello Ravi ", function(error){
            if(error){
                console.log(error);
                
            }else{
                console.log("Successfully add on files");
                
            }
        })
    }

    
})



// Folder Deleted 

// const {rm}= require('fs')
// rm('./Node-JS/Folder/Photos', {recursive:true}, function(error){
//     if(error){
//         console.log(error);
        
//     }else{
//         console.log("SuccessFully Deleted");
        
//     }
// })


// readFile the files

const {readdir} =require('fs')

readdir('/Node-JS/Folder/Photos', 'utf8', function(error, data){
    if(error){
        console.log(error);
        
    }else{
        console.log("Successfully add the data ");
        console.log("-----------");
        console.log(data);
        
        
        
    }
})
