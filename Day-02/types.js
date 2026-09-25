let fName ='Engy';
let age=27;
let isGraduate = true;
let startWork = null;
let salary ;


const salaryOfJop=[27000,30000,25000,15000];
const friend={
    name:'sara',
    city:'sudan'   
};
  console.log(`typeof 'Engy' -> ${typeof fName}`);
  console.log(`typeof age -> ${typeof age}`);
  console.log(`typeof isGraduate -> ${typeof isGraduate}`);
  console.log(`typeof startWork -> ${typeof startWork}`);
  console.log(`typeof salary -> ${typeof salary}`);
  console.log(`typeof salaryOfJop -> ${typeof salaryOfJop}`); // type of array is object 
  console.log(`typeof friend -> ${typeof friend}`);
  console.log(Array.isArray(salaryOfJop)); //this is way to know  is it array or object

  console.log('42'+5);
  console.log(42+'sara');
  console.log(`${Number('hello')} and type of = ${typeof Number('hello')}`);
  console.log(`res of parseInt ${parseInt("42px")} this mean that parseInt gives number leave string ... res of Number ${Number('42px')} this mean that Number  gives NaN when there is string letter in code`);

  let falsyValues=[[],{},0,null,undefined,false,'',0n,NaN,'0','hello']; //document.all is a falsy value but that can run in broser
  for (i=0;i<falsyValues.length;i++) {
    console.log(Boolean(falsyValues[i])); 
  };
  
  
  let score=0;
  console.log(score || 30);
  console.log(score ?? 30); //?? when 0 is valid value
  
  
  
