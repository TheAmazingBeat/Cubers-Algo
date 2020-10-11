/* *************************** */
/* STOPWATCH VARIABLES */
var time = document.querySelector('#time'),
  minute = 0,
  second = 0,
  centisecond = 0,
  decisecond = 0,
  timestamp = '',
  counter,
running = false;
/* ******************* */

/* STOPWATCH FUNCTIONS */
//starts the timer when spacebar is pressed and resets the timer after stopping the timer
document.addEventListener('keydown', function (event) {
  if (event.key == ' ') {
    // if (time.style.color == 'rgb(0, 255, 102)') {
    //   resetTimer();
    // }
    time.style.color = '#00ff66';
  }
}, true);

//stops the timer if timer is already running
document.addEventListener('keyup', function (event) {
  if (running) {
    stopTimer();
    running = false;
  } else if (event.key == ' ') {
    time.style.color = '#ffffff';
    startTimer();
  }
}, true);

// calls displayTime every 0.01 second
function startTimer() {
  // Brings variables into initial state
  time.textContent = '00:00:00';
  time.style.color = '#ffffff';
  minute = 0;
  second = 0;
  centisecond = 0;
  decisecond = 0;
  
  counter = setInterval(displayTime, 10);
  running = true;
}

// stops the interval that makes displayTime repeat
function stopTimer() {
  if (running) {
    clearInterval(counter);
    time.textContent = timestamp;
    time.style.color = '#00ff66';
    listTime(timestamp, scramble);
    displayScramble();
  }
}

function displayTime() {
  decisecond++;
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    if (decisecond >= 6) {
      centisecond++;
      decisecond = 0;
    }
    if (centisecond >= 10) {
      second++;
      centisecond = 0;
    }
    if (second >= 60) {
      minute++;
      second = 0;
    }
  } else {
    if (decisecond >= 10) {
      centisecond++;
      decisecond = 0;
    }
    if (centisecond >= 10) {
      second++;
      centisecond = 0;
    }
    if (second >= 60) {
      minute++;
      second = 0;
    }
  }


  /* 
   * Conditional ternary operator:
   * |condition| ? |statement| : |else statement|
   * if the number is greater than nine, it will return to 0
   * this is done for each digit for minute and second
  */
  timestamp = (minute ? (minute > 9 ? minute : '0' + minute) : '00') + ':' +
    (second ? (second > 9 ? second : '0' + second) : '00') + ':' +
    (centisecond) +
    (decisecond);
  time.textContent = timestamp;
}
/* *************************** */
/* *************************** */



/* *************************** */
/* GENERATE SCRAMBLE VARIABLES */
var moves = [
    "R", "R'", "R2",
    "L", "L'", "L2",
    "U", "U'", "U2",
    "D", "D'", "D2",
    "F", "F'", "F2",
    "B", "B'", "B2"
  ],
  scramble = [],
  randomNum,
  scrambleDiv = document.querySelector('#scramble');
/* *************************** */

/* GENERATE SCRAMBLE FUNCTIONS */
//Generates a random move from moves array
function getMove(){
  randomNum = Math.floor(Math.random() * moves.length);
  return moves[randomNum];
}

// Makes a scramble for the cube
function makeScramble(array) {
  // 20 moves for the scramble
  let lastNum = 0;
  while(array.length < 20){
    let randomMove = getMove();
    if(array[0] == undefined){
      array.push(randomMove);
    }
    else{
      // If the letter of the randomMove matches the letter of the previous move, then make a random move again
      while(randomMove.charAt(0) == array[lastNum].charAt(0)){
        randomMove = getMove();
      }
      array.push(randomMove);
      lastNum++
    }
  }
  return array;
}

// attaches the generated scramble to a div
function displayScramble() {
  scramble = []
  scrambleDiv.textContent = '';
  makeScramble(scramble);
  for (let i = 0; i < scramble.length; i++) {
    scrambleDiv.textContent += ' ' + scramble[i];
  }
}

window.onload = displayScramble();
/* *************************** */
/* *************************** */



/* *************************** */
/* ****** LISTING TIMES ****** */
var table = document.querySelector('#time-table');
var timeID = 1;
function listTime(time, scramble){
  //creates table elements
  var row = document.createElement('tr'),
  timeNum = document.createElement('td'),
  timeCell = document.createElement('td'),
  scrambleCell = document.createElement('td');

  //add styles/classes to elements
  row.className = 'time-row';
  timeNum.className = 'time-cell';
  timeCell.className = 'time-cell';
  scrambleCell.className = 'time-cell';

  //inputs parameters in the elements
  timeNum.textContent = timeID;
  timeCell.textContent = time;
  for(let i = 0; i < scramble.length; i++){
    scrambleCell.textContent += scramble[i] + ' ';
  }

  //row will append the created elements
  row.appendChild(timeNum);
  row.appendChild(timeCell);
  row.appendChild(scrambleCell);

  document.querySelector('#time-table').appendChild(row);

  timeID++;
}
/* *************************** */
/* *************************** */