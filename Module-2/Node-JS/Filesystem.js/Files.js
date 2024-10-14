const filesystem= require('fs');

filesystem.writeFile("System File", "Add the file ", function(error){
    if(error){
        console.log(error);
    }else{
        console.log("View the code ");
    }
})

//Deleted the file 

// filesystem.unlink("System file", function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Succescsfull Deleted the file ");
        
//     }
// })

// read the file 

filesystem.readFile("System file", "utf8", function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log("data the add ");
        console.log("---------------");
        console.log(data);
        
        
    }
})

// Append the files 

filesystem.appendFile("System file", "Hello Ravi", function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Add the files in the function");
        
    }
})

