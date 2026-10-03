## The difference between const and let ? 
const can not reassign variable. 

let can do it. 
## why const still lets you push into an array ? 
const in that situation const don't change array but change the contents
   
## primitive types :- 
**1.** string 
**2.** number 
**3.** boolean 
**4.** null 
**5.** undefined
**6.** bigint
**7.** symbol 

## Why type of null returns "object" ? and how to check for null properly ? 
Couse it bug . using if conditions variable===null .
## The 8 falsy values :- 
**1.** 0
**2.** '' 
**3.** false 
**4.** undefined 
**5.** NaN 
**6.** null 
**7.** 0n 
**8.** -0

## === vs ==, with one example where == causes a real bug ? 
=== compere with type and value. 

== compere with only value. 

if('4'=='number')//true 

javaScript watch it number so it a bug . 

## When to use ?? instead of || ? 
?? replaces null & undefined value. 

|| replaces any falsy value. 

## When to use each of the five loops ? 
for when i know number of iterations. 

while when i don't know number of iterations. 

for of when want to know values in array. 

for in when want to know key in object. 

do while when i want to loop at least once.  

## The difference between break and continue ? 
break stops the loop. 

continue skips only the current iteration.

