// for time

let msec = document.querySelector(".millsec ");
let second = document.querySelector(".seconds");
let minute = document.querySelector(".minuts");
let hour = document.querySelector(".hours");

///////
let hours = 0;
let minutes = 0;
let seconds = 0;
let msecond = 0;
let count;


// for btns
let start=document.querySelector(".Start")
let stop=document.querySelector(".Stop")
let reset=document.querySelector(".Reset")

start.addEventListener("click",startTime)
stop.addEventListener("click",stopTime)
reset.addEventListener("click",resetTime)


//for start
function startTime() {
  count = setInterval(() => {
    ++msecond;
    msec.textContent = `${msecond}`.padStart(2, 0);

    if (msecond === 100) {
      ++seconds;
      second.textContent = `${seconds}`.padStart(2, 0);
      msecond = 0;
    }
    if (seconds === 60) {
      ++minutes;
      minute.textContent = `${minutes}`.padStart(2, 0);
       seconds = 0;
    }

    if (minutes === 60) {
      ++hours;
      hour.textContent = `${hours}`.padStart(2, 0);
       minutes = 0;
    }
  }, 10);
}
//for stop
function stopTime() {
  clearInterval(count);
}


//for reset
function resetTime() {
  clearInterval(count);

  hours = 0;
  minutes = 0;
  seconds = 0;
  msecond = 0;
  msec.textContent = "00";
  minute.textContent = "00";
  hour.textContent = "00";
  second.textContent = "00";
}
