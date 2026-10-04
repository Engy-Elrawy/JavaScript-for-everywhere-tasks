## The difference between a parameter and an argument? 
parameter when i create function send it after function name . 

argument when i call function send it .


## Declaration vs expression vs arrow — one line each, and when I'd pick each? 
Declaration function sum(){} is when i create function in normal way and call it using function name() . 

expression is when i ignore name of function and use it by variable Ex ==> const sum =function (){}. 

arrow is when i use short way of function or less line of code  EX ==> const sum=(a,b) =>{return a+b;} ==>(a,b)=>a+b;

## Why return and console.log are not interchangeable? 
return to bear result of function . 

log i use it to test the code , it can not replace return in function.

## What a guard clause is and why it beats nested if / else ? 
by my understanding : 

it say that when enter if situation you will return and exit from function. 

it can use when i don't make nested if or else in wrong situations. 

## Global vs function vs block scope, one sentence each? 
Global everything in code watch it and can access it . 

function create inside function and use only in function . 

block scope every variable inside {}. 

## What the scope chain is, and which direction it searches ? 
function inside function can use own variable, 
inner function can access variable in outer function but outer can not do that . 

## What hoisting actually moves — for function, var, let, const ? 
firstly hoisting ==> JavaScript before run the code scan all code once and register variables & functions in memory.  

in function declaration hoisting all function ...in arrow take reference error ... in expressions with var type error Couse undefined() ,with let & const reference error. 

var ===> hoisting and gives undefine. 

let & const ===> hoisting but can not use its before initialize so any use in TDZ will give reference error . 

## What the TDZ is, and why an error there beats undefined ? 
when let & const  hoisted they included in Temporal Dead Zone from start of block until line they are declaration in . 

the best practice in every programing language is declare variable and use it when i call undeclaration variable using var 

will give me undefined this make a problems in any time after . 
## What a closure is, in one sentence, without using the word "closure" ? 
function return function and inner function retains and survived variable used from outer function. 

## The difference between passing fn and passing fn() ?
passing fn return ==>[function:passing]. 

passing fn() its calling function so return what function do it.

## My Task 5.3 answer — the line counts and the one-place change?
 the line counts in Day 2 ===> sum+=student.score;

