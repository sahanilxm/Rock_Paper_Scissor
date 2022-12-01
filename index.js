
const totalScore = {
  computerScore: 0,
  playerScore: 0
}

function getComputerChoice() {
  const arr = ['Rock', 'Paper', 'Scissors'];
  const ran = arr[Math.floor(Math.random() * arr.length)];
  console.log(ran);
  return ran;
}


function getResult(playerChoice, computerChoice) {

  let score;

  if (playerChoice === computerChoice) {
      score = 0;
      return score;
  }

  if (playerChoice === "Rock" && computerChoice === "Scissors") {
      score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      score = 1;
  } else {
      score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {

  if (score === -1) {
      document.getElementById("result").innerText = "Oops You Lose!!";
      playSound("wrong");
  } else if (score === 0) {
      document.getElementById("result").innerText = "Game Tied!!";
      playSound("red");
  } else {
      document.getElementById("result").innerText = "Congrats You won!!";
      playSound("success");
  }
  document.getElementById('hands').innerText = `👦🏻${playerChoice} vs 🤖${computerChoice}`
  document.getElementById('hands').style = "margin-bottom : 20px";

  document.getElementById("player-score").innerText = "Your Score : " + totalScore['playerScore'];
  document.getElementById("player-score").style = "margin-bottom : 20px;"
}

function onClickRPS(playerChoice) {
  const comp = getComputerChoice();
  const score = getResult(playerChoice, comp);

  totalScore['playerScore'] += score;
  showResult(score, playerChoice, comp);
  addColor(score);
}

function addColor(score) {
  if (score == 0) {
      document.getElementById("result").style = "color : yellow; margin-bottom : 20px";
  }else if(score == 1){
      document.getElementById("result").style = "color : #01ff01; margin-bottom : 20px";
  }else{
      document.getElementById("result").style = "color : red; margin-bottom : 20px";
  }
}

function playGame() {

  let RPSButtons = document.querySelectorAll('.rpsButton');

  RPSButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });


  document.getElementById('endGameButton').onclick = () => endGame();
}


function endGame() {
  playSound("blue");
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("player-score").innerText = "";
  document.getElementById("hands").innerText = "";
}

function playSound(audioName) {
  let audio = new Audio("Audio/" + audioName + ".mp3");
  audio.play();
}
playGame()