/*

Que-9:- Fibonacci Function: Write a function that returns 
the nth Fibonacci number. For example, if the input is 5, 
the output should be 5 (0, 1, 1, 2, 3, 5).

*/

let x=0, y=1, z;
console.log("fibonacci numbers");
for(let i=0; i<=5; i++){
    console.log(x);
    z=x+y;
    x=y;
    y=z;
}




