// Creating variables for millisecond, second and minute.
var milliSecond = 0;
var second = 0;
var minute = 0;
// Getting data from html.
var outputMillisecond = document.querySelector("#milliSecond");
var outputSecond = document.querySelector("#second");
var outputMinute = document.querySelector("#minute");
// Assigning html buttons with javascript.
var startBtn = document.querySelector("#startBtn");
var stopBtn = document.querySelector("#stopBtn");
var resetBtn = document.querySelector("#resetBtn");
// Creating interval variable.
var interval;

// Function for start stopwatch.
function startStopwatch() {
  milliSecond++;
  if (milliSecond <= 9) {
    outputMillisecond.innerHTML = "0" + milliSecond;
  }
  if (milliSecond > 9) {
    outputMillisecond.innerHTML = milliSecond;
  }
  if (milliSecond > 99) {
    second++;
    milliSecond = 0;
    outputMillisecond.innerHTML = "00";
    outputSecond.innerHTML = "0" + second;
  }
  if (second > 9) {
    outputSecond.innerHTML = second;
  }
  if (second > 59) {
    minute++;
    second = 0;
    outputSecond.innerHTML = "00";
    outputMinute.innerHTML = "0" + minute;
  }
  if (minute > 9) {
    outputMinute.innerHTML = minute;
  }
}

// This click event and function is to start the stopwatch from 0 or where it stopped.
startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 10); // 10 millisecond = 0.01 second
});

// This click event and function is to stop or pause the stopwatch.
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

// This click event and function to reset the stopwatch to all values 0.
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  milliSecond = 0;
  second = 0;
  minute = 0;
  outputMillisecond.innerHTML = "00";
  outputSecond.innerHTML = "00";
  outputMinute.innerHTML = "00";
});