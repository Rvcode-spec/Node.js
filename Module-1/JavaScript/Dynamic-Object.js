// Object={
//     name: "Ravi",
//     rollNo: 3410,
//     mobileNo:9871585013,
//     age:23,
//     occupation:"Student",
//     task:function(){
//         console.log("Student");
        
//     },
//     education: "Diploma", "10th",
//     otherDetails:{
//         married: false,
//         hometown: "Bihar"
//     }

// }

// --------------------------------------------------------------------
//  Dynamic-Object Using By e5

// function Student(name, rollNo, mobileNo, age, occupation, task, education, otherDetails){
//     this.name=name;
//     this.rollNo=rollNo;
//     this.mobileNo=mobileNo;
//     this.age=age;
//     this.occupation=occupation;
//     this.task=task;
//     this.education=education;
//     this.otherDetails=otherDetails;


// }


// let SD=new Student("Ravi", 3410, 9871585013, 23, "Student", function(){
//     console.log("Student");
    
// }, "Diploma",{

//     married:false,
//     hometown:"Bihar",
// });

// console.log(SD);

// let SD1=new Student("Shankar", 3510, 9871585012, 25, "B.sc Student", function(){
//     console.log("B.sc");
// }, "B.Tech", {
//     married:false,
//     hometown:"Bihar"
// })

// console.log(SD1);


// ------------------------------------------------------

// Dynamic-Object Uisng By e6 Class constructor 

class Emp{
    constructor(name, rollNo, mobileNo, age, occupation, task, education,) {
        // super(name, rollNo, mobileNo, age, occupation, task, education,)
        this.name=name;
        this.rollNo=rollNo;
        this.mobileNo=mobileNo;
        this.age=age;
        this.occupation=occupation;
        this.task=task;
        this.education=education;
    }


}

let SD2=new Emp("Singh", 3610, 9871585012, 25, "B.sc Student", function(){
    console.log("B.sc");
}, "B.Tech", {
    married:false,
    hometown:"Bihar"
})

console.log(SD2);



