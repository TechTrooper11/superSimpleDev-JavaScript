let hours = `00`;
let minutes = `00`;
let seconds = `00`;

function startTime(){

  function checkTime(i){
    if(i < 10){
      i = "0" + i;
    }
    return i;
  }

  let timerId = setInterval(() => {
    if(seconds < 59){
      seconds++;
      seconds = checkTime(seconds);
      document.querySelector('.inner-display-time').innerHTML = `${hours} : ${minutes} : ${seconds}`;
    }else if(seconds === 59){
      seconds = `00`;
      document.querySelector('.inner-display-time').innerHTML = `${hours} : ${minutes} : 00`;
      minutes++;
      minutes = checkTime(minutes);
      document.querySelector('.inner-display-time').innerHTML = `${minutes} : ${seconds}`;
    }else if(minutes < 59){
      hours++;
      document.querySelector('.inner-display-time').innerHTML = `${hours} : ${minutes} : ${seconds}`;
    }

  }, 1000);
}

let isStart = false;
const stopButtonElement = document.querySelector('.js-stop-button');
stopButtonElement
  .addEventListener('click', () => {
    if(!isStart){
      startTime();
      stopButtonElement.classList.add('js-start-button');
      stopButtonElement.innerHTML = `<img class="stop-icon" src="/images/pause-icon-removebg-preview.png">`;

      const resetButtonElement = document.querySelector('.js-reset-button');

      resetButtonElement.innerHTML = `<div class="reset-div"><img class= "js-reset-icon" src="/images/reset-icon-removebg-preview.png"></div>`;

      const timeLapseButtonElement = document.querySelector('.js-timelapse-button');

      timeLapseButtonElement.innerHTML = `<div class="reset-div"><img class= "js-reset-icon" src="/images/time-lapse-icon-removebg-preview.png"></div>`;

      isStart = true;
    }else{
      stopButtonElement.classList.remove('js-start-button');
      stopButtonElement.innerHTML = `<img class="stop-icon" src="/images/play-icon-removebg-preview.png">`;
      
      const resetButtonElement = document.querySelector('.js-reset-button');
      resetButtonElement.innerHTML = `<div class="js-reset-button"></div>`;

      const timeLapseButtonElement = document.querySelector('.js-timelapse-button');
      timeLapseButtonElement.innerHTML = `<div class="js-timelapse-button"><div>`;

      isStart = false;
    }
  })

  document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
      hours = `00`;
      minutes = `00`;
      seconds = `00`;

      document.querySelector('.js-reset-button').classList.add('reset-div-any');
    })


  function lightmode(){
    document.body.classList.add('light-mode');
    document.querySelector('.inner-display-time').classList.add('light-mode-text');
    document.querySelector('.outer-circle-div').classList.add('light-mode-border-of-circle');

    document.querySelector('.right-section').innerHTML = `<img class="js-night-mode-off-icon" src="/images/switch3_off-removebg-preview.png"><img class="setting-icon" src="/images/setting-icon-white-removebg-preview.png">`;
  }

  function nightmode(){
    // document.body.classList.add('night-mode');
    // document.querySelector('.inner-display-time').classList.add('night-mode-text');
    // document.querySelector('.outer-circle-div').classList.add('night-mode-border-of-circle');

    document.querySelector('.right-section').innerHTML = `<img class="js-mode-icon mode-icon" src="/images/switch3_on-removebg-preview.png"><img class="setting-icon" src="/images/setting-icon-white-removebg-preview.png">`;
  }

  let isLightMode = false;
  document.querySelector('.js-mode-icon')
    .addEventListener('click', () => {

    if(!isLightMode){
      lightmode();
      isLightMode = true;
    }else{
      nightmode();
      isLightMode = false;
    }
  })