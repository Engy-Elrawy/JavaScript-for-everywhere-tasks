//pure logic
function isValidScore(score){
  if(typeof score !== 'number' || Number.isNaN(score))return false;
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

function average(numbers){
  if(numbers.length === 0)return 0;
  let total=0;
  for (const number of numbers) {
    total+=number;
  }
  return total/numbers.length;
}


//DOM handling

let stdName=document.getElementById('stdName') ;
let stdScore=document.getElementById('stdScore') ;
let add=document.getElementById('addBtn');
let clear=document.getElementById('clearBtn');
let message=document.getElementById('message');
let list=document.getElementById('stdList');
const stdArr=[];
let averge=document.getElementById('avrageMessage');

function handleAdd() {
  let name=stdName.value ;
  let score=Number(stdScore.value);
    if(name === '' || Number.isNaN(score)) return message.innerText='SOMETHING WRONG PLEASE TRY AGAIN';
    if(score < 0 || score > 100) return message.innerText='SOMETHING WRONG PLEASE TRY AGAIN';
    message.innerText = '';
    stdArr.push({name,score});
    render();
    stdName.value='';
    stdScore.value='';
}

add.addEventListener('click',handleAdd);
function render() {
  list.innerHTML = '';
  let total=0;
  for (const {name,score} of stdArr) {
    list.innerHTML += `<li>${name} = ${score}</li>`;
    total+=score;
  }
  averge.innerText=`count = ${stdArr.length} ... average = ${(total/stdArr.length).toFixed(1)} `;
  console.log(stdArr);
}

clear.addEventListener('click',()=>{
console.log('inside clear Btn');
stdArr.length = 0;
list.innerHTML = '';
averge.style.display='none';
console.log(stdArr);
})













 