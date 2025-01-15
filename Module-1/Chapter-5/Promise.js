let x=10, y=20, z=0; 


let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(50)
    },2000)
})


waitingData.then((z)=>{
    console.log(x+y+z);
})