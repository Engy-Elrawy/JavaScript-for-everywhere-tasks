function isValidScore(score){
  if(typeof score!== 'number' || Number.isNaN(score))return false;
  if(score < 0 || score >100)return false;
  return true;
}

function letterGrade(score){
if(score>=90) return 'A';
if(score>=80) return 'B';
if(score>=70) return 'C';
if(score>=60) return 'D';
return 'F'
}

function isPassing(score, passMark = 60){ return score >= passMark };

function isAtRisk(student) {
  return student.score < 60 || student.attendance < 70
};
function average(numbers){
  if(numbers.length === 0)return 0;
  let total = 0;
  for (const number of numbers) {
    total+=number;
  }
  return total/numbers.length;
}

function highest(students) {
let bestStd=students[0];
for (const student of students) {
  if(student.score>bestStd.score){
    bestStd=student;
  }
}
return bestStd;
}

function lowest(students){
let lowestStd=students[0];
for (const student of students) {
  if(student.score<lowestStd.score){
    lowestStd=student;
  }
}
return lowestStd;
}

function countByGrade(students){
const counts = { A: 0, B: 0, C: 0, D: 0, F: 0 };
 for (const student of students) {
    counts[letterGrade(student.score)]++;
  }
  return counts;
}

function formatRow(student) {
    const name = student.name.padEnd(8);
    const score = String(student.score).padEnd(5);
    const attendance = String(student.attendance).padEnd(5);
    return  `Name: ${name} | Score: ${score} | Attendance: ${attendance}`;
}

const students = [
  { name: "sara", score: 75, attendance: 50 },
  { name: "ahmed", score: 90, attendance: 90 },
  { name: "hamada", score: 80, attendance: 57},
  { name: "sondos", score: null, attendance: 40 },
  { name: "mostafa", score: 65, attendance: 95 },
  { name: "manar", score: 99, attendance: 80 },
  { name: "ramy", score: 45, attendance: 60},
  { name: "rana", score: "55", attendance: 55 },
  { name: "karma", score: 89, attendance: 87 },
  { name: "omran", score: 99, attendance: 67 }
];

console.log("                STUDENTS REPORT                   ");
console.log("-".repeat(46));

const valid = [];
let skipped = 0;

for (const student of students) {
  if (!isValidScore(student.score)) {
    skipped++;
    continue;
  }
  valid.push(student);
  console.log(formatRow(student));
}

const counts = countByGrade(valid);
const scores = [];
let atRisk = 0;

for (const item of valid) {
  scores.push(item.score);
  if (isAtRisk(item)) atRisk++;
}

console.log(`
  ---------- Summary ----------
  `);
console.log(`A:${counts.A} B:${counts.B} C:${counts.C} D:${counts.D} F:${counts.F}`);
console.log(`Average: ${average(scores).toFixed(1)}`);
console.log(`Highest: ${highest(valid).name}`);
console.log(`Lowest:  ${lowest(valid).name}`);
console.log(`At risk: ${atRisk}`);
console.log(`Skipped: ${skipped}`);

 
