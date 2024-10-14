/*
Que-5:- Ob0jects: How do you add a new property to an existing
object? Provide an example object and show how to 
add a property called age.

*/

let Obj={

    name:'Ravi',
    mobileNo:987165436,
}

function addproperty(obj, key, value){
    obj[key]=value;

}

addproperty(Obj, 'age', 30)
console.log(Obj);


