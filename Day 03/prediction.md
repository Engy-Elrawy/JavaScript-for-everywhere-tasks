// 1
console.log(a);  //undefind
var a = 1;      

// 2
console.log(b); //referance error
let b = 2;

// 3
hello(); //hi
function hello() { console.log("hi"); }

// 4
bye(); //referance error
const bye = () => console.log("bye");

// 5
function f() { return; 42; } //undefined
console.log(f());

// 6
const g = (x) => { x * 2 }; //10 //right answer undefind  couse function without return 
console.log(g(5));

// 7
const h = (x) => { value: x }; // error //right answer undefind   couse function not understand this without object {}
console.log(h(5));

// 8
function k(a, b) { return a + b; } //NaN
console.log(k(1));

// 9
function m(x = 10) { return x; } //null //10 //0
console.log(m(null), m(undefined), m(0));

// 10
let n = "outer";
function p() { let n = "inner"; return n; }
console.log(p(), n); //inner  //outer

// 11
for (var i = 0; i < 3; i++) {}
console.log(i); //0 //right answer 3  couse var global scope and this loop works 3 times

// 12
for (let j = 0; j < 3; j++) {}
console.log(j);  //referance error 

// 13
function counter() { let c = 0; return () => ++c; }
const q = counter();
console.log(q(), q(), counter()()); // 0  //1  //2 //right answer 1 2 1 couse when call first time increse 1 so it =1 secound =2   

// 14
const nums = [1, 2, 3]; //[2,4,6]
console.log(nums.map((x) => x * 2));

// 15
function r() { console.log("ran"); } [function : r]
console.log(r);