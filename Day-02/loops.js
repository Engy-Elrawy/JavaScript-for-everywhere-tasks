for (let i = 0; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
console.log("..................................");
//for of  ----------------------------

const tracks = ["web", "mobile", "disctop", "games", "devops", "iot"];
for (const track of tracks) {
  console.log(track);
}
console.log("..................................");
//for in ------------------------

const studentInfo = {
  name: "sara",
  age: 23,
  phone: "010000087999",
  city: "cairo",
  grade: 100,
};
for (const key in studentInfo) {
  console.log(`${key} : ${studentInfo[key]}`);
}
console.log("..................................");
//while -----------------------

let start = 100;
while (start > 1) {
  start /= 2;
  console.log(start);
}
console.log("..................................");
//do while ---------------------

let grade = 50;
do {
  console.log(`i'm bass`);
} while (grade > 80);
console.log("..................................");
//Continue-----------------------

const scores = [50, 70, 96, 40, 63, 95];

for (const score of scores) {
  if (score < 50) {
    continue;
  }
  console.log(score);
}

console.log("..................................");

for (const score of scores) {
  if (score > 95) {
    break; //result 50 70 لما الظرف تحقق بريك بتكسر اللوب وتخرج
  }
  console.log(score);
}
console.log("..................................");

const nums = [3, 9, 5, 14, 25, 80, 47, 50];

//Sum & Avrage  ---------------------

let sum = 0;
for (const num of nums) {
  sum += num;
}
console.log(sum);
let avrage = sum / nums.length;
console.log(avrage.toFixed(1));
console.log("..................................");
//Max Number ----------------------

let maxNumber = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > maxNumber) {
    maxNumber = nums[i];
  }
}
console.log(maxNumber);

//Min Numbeer  --------------------------
let minNumber = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] < minNumber) {
    minNumber = nums[i];
  }
}
console.log(minNumber);
