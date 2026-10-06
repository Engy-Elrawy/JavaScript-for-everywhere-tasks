// function celsiusToF(num){
//     return num + 5;
// }

// const add_5=function(num){
// return num + 5;
// }

// let add_5New=(num)=>num + 5;

// console.log(`func1 = ${celsiusToF(25)} ... func2 = ${add_5(25)} ... func3 = ${add_5New(25)}`);
 

// // log & return
// function addLog(a,b) {
//     console.log(a+b);   
// }

// console.log(addLog(5,10));

// function addReturn(a,b) {
//     return a+b;
// }

// let sum=addReturn(5,10)
// console.log(sum);

// const double = addLog(2,3)*2;//NaN COUSE this function not return values in it = undefind so undefind * any number = NaN
// const doubleNew=addReturn(2,3)*2; //10
// console.log(double);

//default
// function greet(name = "guest", greeting = "Hello") {
//     return`${greeting} ... ${name}`
// }
// console.log(greet());
// console.log(greet('Engy'));
// console.log(greet('Engy','hi'));
// console.log(greet(undefined,'hi'));
// console.log(greet(null)); //couse null is a value

// //rest 

// function sumAll(...numbers){
//     let total=0;
//  for (let i = 0; i < numbers.length; i++) {
//     total+=numbers[i] ;
//  }
//     return   total;
// }
// console.log(sumAll(1,0,7,40,80,14,77));


// function describe(label, ...values){
//     return `${label} : ${values.join(',')}`
// }
// console.log(describe('score',50,79,90));


function safeDivide(a, b) {
   if (b === 0) {
     return "Cannot divide by zero";
   }
   if (typeof a !== "number" || typeof b !== "number") {
     return "Not a number";
   }
   return a / b;
}

console.log(safeDivide(2,0));
console.log(safeDivide(2,'8'));
console.log(safeDivide(4,2));

