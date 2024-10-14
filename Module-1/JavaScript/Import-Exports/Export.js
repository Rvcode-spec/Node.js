function logEvenOdd(){
    for(let i=1; i<=5; i++){
        if(i%2==0){
            console.log('Even', i);
            
        }else{
            console.log('Odd',i);
            
        }
    }
}
    
module.exports = logEvenOdd;