const students = [
  { name: "sara", score: 91 },
  { name: "sama", score: 80 },
  { name: "sana", score: 69 },
  { name: "saly", score: 85 },
  { name: "samar", score: 53 },
  { name: "sabreen", score: 50 },
  { name: "sondos", score: 96 },
];

for (const student of students) {
    console.log(` student name ${student.name} ... student score ${student.score}`);
}


let exellentStudents = 0;
let goodStudents = 0;
let needWorkStudents = 0;

for (const student of students) {
  if (student.score > 90) {
    exellentStudents++;
    console.log("Excellent");
  } else if (student.score > 70 && student.score < 89) {
    console.log("Good");
    goodStudents++;
  } else if (student.score < 70) {
    console.log("Need Work");
    needWorkStudents++;
  }
}
console.log(
  `Student got Exellent = ${exellentStudents} ... Student got Good = ${goodStudents} ... Student got Need Work = ${needWorkStudents}`,
);
