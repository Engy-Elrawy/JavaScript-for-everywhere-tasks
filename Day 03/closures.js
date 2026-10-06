//closure
function makeCounter(){
    let counter =0;
    return function () {
        counter ++;
        return counter;
    }  
}

let counterFunctionWork1=makeCounter();
let counterFunctionWork2=makeCounter();

console.log(counterFunctionWork1()); //this is closure that means count survives because the returned function still needs it
console.log(counterFunctionWork1());
console.log(counterFunctionWork2());
console.log(counterFunctionWork1());
console.log(counterFunctionWork2());

//funcions factory

function makeMultiplier(factor){
    return (num)=>{
      return num*factor;
    }
}

let maltiplayNums=makeMultiplier(4);
console.log(maltiplayNums(5));
console.log(maltiplayNums(6));
console.log(maltiplayNums(7));

let double=makeMultiplier(4);
console.log(double(2));

let trable=makeMultiplier(4);
console.log(trable(3));

let half=makeMultiplier(4);
console.log(half(0.5));

function makeGrader(passMark){
  return function (score) {
    if(score>=passMark){
        return 'PASS';
    }
    return 'FAIL';
  }
};

let gradeStd=makeGrader(85);
let gradeStdAnthor=makeGrader(60);
console.log(gradeStd(70));
console.log(gradeStdAnthor(70));

//callback

function myForEach(array, callback){
    for (let i = 0; i < array.length; i++) {
         callback(i,array[i])
    }}


 const tracks=['web','mobile','desktop','games'];
 myForEach(tracks,(item,track)=>{
  console.log(`${item+1}. ${track}`);
  
 });


 function myMap(array, callback){
    callback(array) ;
 };
 const nums=[3,5,7,9];
 myMap(nums,(nums)=>{
    const newNums=[];
    for (let i=0;i<nums.length;i++) {   
        newNums.push(nums[i]*4)
    }
    console.log(newNums);
 });

 

 function myFilter(array, test){
    const res=[];
    for (let i = 0; i < array.length; i++) {
      if (test(array[i])) {
        res.push(array[i])
      }
    }
    return res;
 };

const scores=[39,59,70];
let newScores= myFilter(scores,(score)=>score>=50 )
console.log(newScores);
console.log(scores);


function runTwice(fn){
  return  fn();
}

function sayHi(){
    console.log('hi');
}

runTwice(sayHi);
// runTwice(sayHi());throw error 