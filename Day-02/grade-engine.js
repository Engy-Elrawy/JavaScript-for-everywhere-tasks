// const studentGrade =105;

// if (studentGrade > 100 || studentGrade < 0){
//     console.log('Invalid Score');
    
// }else if(studentGrade>=90){
//     console.log('A');
    
// }else if (studentGrade>=80){
//     console.log('B');
    
// }else if (studentGrade>=70){
//     console.log('C');
    
// }else if (studentGrade>=60){
//     console.log('D'); 
// }else{
//     console.log('F');};


// let studentGrade2 = 75;
// console.log(studentGrade2 >=60 ? 'pass':'fail'); //code will not reasabiolity
 

// let studentGrade3='A';

// switch (studentGrade3) {
//   case "A":
//     console.log("Exellent");

//   case "B":
//     console.log("VeryGood");

//     break;
//   case "C":
//     console.log("Good");

//     break;
//   case "D":
//     console.log("Makbool");

//     break;

//   default:
//     console.log("Fail");

//     break;
// };


let studentGrade4 =79;
let attendance ='40%';

if(studentGrade4>=90){
    console.log('A');
    
}else if (studentGrade4>=80){
    console.log('B');
    
}else if (studentGrade4>=70 && attendance>='80%'){
    console.log('Certificate awarded');
    
}else if (studentGrade4<60 || attendance < '50%'){
    console.log('Review needed'); 
}else{
    console.log('F');}