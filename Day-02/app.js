let scoreInput=document.getElementById("score");
let btn = document.getElementById("btn");
let clearBtn = document.getElementById("clearBtn");
let scoreList = document.getElementById("scoreList");
let message = document.getElementById("message");
let stdScores = [];

function checkScore() {
  let res = ``;

  let inputValue = scoreInput.value;
   scoreInput.value = "";
  let score = Number(inputValue);

  if (isNaN(score) || score < 0 || score > 100) {
    message.innerText = "Please enter a number between 0 and 100";
    return;
  }

  message.innerText = "";

  if (score >= 90) {
    res = "A";
    stdScores.push(res);
  } else if (score >= 80) {
    res = "B";
    stdScores.push(res);
  } else if (score >= 70) {
    res = "C";
    stdScores.push(res);
  } else if (score >= 60) {
    res = "D";
    stdScores.push(res);
  } else {
    res = "F";
    stdScores.push(res);
  }

  scoreList.innerHTML = "";
  for (const stdScore of stdScores) {
    scoreList.innerHTML += `<li>${stdScore}</li>`;
    console.log(stdScores);
  }
}

btn.addEventListener("click", checkScore);

clearBtn.addEventListener("click", () => {
  stdScores.length = 0;
  console.log(stdScores);
  scoreList.innerHTML = "";
  message.innerText = "";
});
