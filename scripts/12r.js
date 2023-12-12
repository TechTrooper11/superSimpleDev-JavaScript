
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}; //load the score from localStorage

updateScoreElement();

// if(!score ){ //score === null //this code is same as above code
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };
// }

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// };

function autoPlay(){
  if(!isAutoPlaying){
    //+++++++++++++++++++ Arrow Functions ++++++++++++++++++
    //when writing function inside function it's recommended to use arrow function.
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }else{
    //setInterval() actually returns a number and this nummber is like an id so we can use this id to stop the interval.
    //to stop an interval we can use clearInterval();
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    let warningTextHTML = '';
    const html = `<p class="js-warning-text warning-text">
    Are you sure you want to reset the score?
    <button class="yes-button">Yes</button>
    <button class="no-button">No</button>
    </p>`;

    warningTextHTML += html;

    const warningTextElement = document.querySelector('.js-warning-div').innerHTML = warningTextHTML;

    const yesButtonElement = document.querySelector('.yes-button');

    yesButtonElement.addEventListener('click', () => {

      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score')
      updateScoreElement();
      setTimeout(() => {
        document.querySelector('.js-warning-div').innerHTML = '';
      }, 0);

      });

    const noButtonElement = document.querySelector('.no-button');

    noButtonElement.addEventListener('click', () => {
      setTimeout(() => {
        document.querySelector('.js-warning-div').innerHTML = '';
      }, 0); 
      })
  })

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();

    const autoPlayElement = document.querySelector('.js-auto-play-button');

    if(autoPlayElement.innerText === 'Auto Play'){
      autoPlayElement.innerHTML = 'Stop Playing';
      autoPlayElement.classList.add('stop-playing');
    }else{
      autoPlayElement.innerHTML = 'Auto Play';
      autoPlayElement.classList.remove('stop-playing');
    }
  });

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){ // event is the object here which contains which key was pressed.
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissors');
  }else if(event.key === 'Backspace'){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScoreElement();
  }else if(event.key === 'a'){
    autoPlay();
  }
});

// document.body.addEventListener('keydown', (event) => {
//   console.log(event.key);
// });

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if(result === 'You win.'){
    score.wins += 1;
  } else if(result === 'You lose.'){
    score.losses += 1;
  } else if(result === 'Tie.'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `${result}`;
  
  document.querySelector('.js-moves').innerHTML = `You
  <img class="move-icon" src="images/${playerMove}-emoji.png">
  <img class="move-icon" src="images/${computerMove}-emoji.png">
  Computer`
  
//       alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
// wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`);

}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}