const students = [
  { name: "sara", score: 75, attendance: "50%" },
  { name: "ahmed", score: 90, attendance: "90%" },
  { name: "hamada", score: 80, attendance: "57%" },
  { name: "sondos", score: 60, attendance: "40%" },
  { name: "mostafa", score: 65, attendance: "95%" },
  { name: "manar", score: 99, attendance: "80%" },
  { name: "ramy", score: 45, attendance: "60%" },
  { name: "rana", score: "55", attendance: "55%" },
  { name: "karma", score: 89, attendance: "87%" },
];

let aBand=0;
let bBand=0;
let cBand=0;
let dBand=0;
let fBand=0;
let skipedStd=0;
let sum=0;
let maxScore=students[0].score;
let minScore=students[0].score;

console.log(`=======>Student Report Card<=======`);

for (const student of students) {
  if (typeof student.score !== "number") {
    console.log(`Invalid`);
    skipedStd++;
    continue;
  } else if (student.score >= 90) {
    console.log(
      `student name : ${student.name.padEnd(10)} | score : ${student.score} | attendance : ${student.attendance} | bande : A | status : PASS `,
    );
    aBand++;
  } else if (student.score >= 80) {
    console.log(
      `student name : ${student.name.padEnd(10)} | score : ${student.score} | attendance : ${student.attendance} | bande : B | status : PASS `,
    );
    bBand++;
  } else if (student.score >= 70 && student.attendance >= "80%") {
    console.log(
      `student name : ${student.name.padEnd(10)} | score : ${student.score} | attendance : ${student.attendance} | bande : c | status : PASS `,
    );
    cBand++;
  } else if (student.score < 60 || student.attendance < "70%") {
    console.log(
      `student name : ${student.name.padEnd(10)} | score : ${student.score} | attendance : ${student.attendance} | bande : D | status : AT RISK `,
    );
    dBand++
  } else {
    console.log(
      `student name : ${student.name.padEnd(10)} | score : ${student.score} | attendance : ${student.attendance} | bande : F | status : FAILED `,
    );
    fBand++;
  }
  sum+=student.score;
}

let avrage=sum/students.length;
console.log(`==> A Band = ${aBand} ... B Band = ${bBand} ... C Band = ${cBand} ... D Band = ${dBand} ... F Band = ${fBand} ... Skiped Student = ${skipedStd}`);
console.log(`==> Avrage = ${avrage.toFixed(1)}`);

// MAX SCORE
let stdName='';
for (let i=1;i<students.length;i++) {
    if (students[i].score>maxScore && typeof students[i].score ==='number') {
        maxScore=students[i].score;
        stdName=students[i].name;
    }
}
 console.log(`==> THE HIGHEST STUDENT NAME IS ${stdName} `);

// MIN SCORE
for (let i=1;i<students.length;i++) {
    if (students[i].score<minScore && typeof students[i].score ==='number') {
        minScore=students[i].score;
        stdName=students[i].name;
    }
}
 console.log(`==> THE LOWEST STUDENT NAME IS ${stdName} `);
