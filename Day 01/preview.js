let name='any';
const grade=80;
// grade=90;
//--------type of variables---------//

// console.log(typeof name);
// console.log(typeof grades);

//--------condetions---------//

// if(grade>60){
//     console.log(`my name is Any .... i'm bassed ^-^`);   
// }else{
//      console.log(`my name is Any .... i'm not bassed `);
// }

//--------Loops---------//

// for (let i = 0; i < 7; i++) {
//     console.log(i);
// }

// const student={name:'Sara',age:15,favoriteLanguage:'french'};
// console.log(`my favorite Language is ${student.favoriteLanguage}`);
 
// let score = 50;

// if (score>60) {
//     console.log('bass');
    
// }else{
//     console.log('fail');
    
// }

// const tracks=['web','mobile','backend'];
// for (let i= 0; i< tracks.length;i++) {
//     if(tracks[i].length>6)
//     {
//         console.log(tracks[i]);
        
//     }
    
// }

const students = [
  { name: "Sara", score: 92 },
  { name: "Omar", score: 68 },
  { name: "Lina", score: 79 },
];

let passed = 0;

for (const student of students) {
  const result = student.score >= 70 ? "PASS" : "FAIL";

  if (result === "PASS") {
    passed++;
  }

  console.log(`${student.name}: ${student.score} → ${result}`);
}

console.log(`\n${passed} of ${students.length} students passed.`);




