// //scope

// var num=5;
// function add(num1,num2) { 
//     if(num1<5){
//     let x =5;
//     console.log(x);
//  }
//  console.log(num);
// //  console.log(x);
 
//     return num1 + num2;

//  }
// console.log(add(3,4));


//var

//  if (true) {
//     var x=5;
//     let y=7
//      }
//  console.log(x,y); //referane error cause let block scope
 
//shadwing
// let status='good';
// function myFeelinges() { 
//     let status='not good'; // couse it enter function so log status will take it  
//     console.log(status); 
//  }

//  myFeelinges();
//  console.log(status);
 
// sum(4,8); //safe
// function sum(a,b){
//     console.log( a+b);
// }

// console.log(a);
// var a=15; //not safe this is bug

// console.log(b);
// let b=13;//safe

//  sayHi();
//  const sayHi=()=>console.log('hi'); //this is safe 
 
// const fns = [];
// for (var i = 0; i < 3; i++) fns.push(() => i);
// fns.forEach((f) => console.log(f()));

// const fnsNew = [];
// for (let i = 0; i < 3; i++) fnsNew.push(() => i);
// fnsNew.forEach((f) => console.log(f()));



