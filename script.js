// let h1=document.getElementById("h1");
// let h2=document.getElementById("h2");
// let h3=document.getElementById("h3");


// function myClock() {

// const hour =getHours();
// const minutes= getMinutes();
// const seconds= getSeconds();
// let h1=document.querySelector("h1");
// h1.textContent=`${hour}:${minutes}:${seconds}`;
// }
// setInterval(()=>{
//     myClock()
//     h1++;
// })


let h1=document.getElementById("timer");
let h2=document.getElementById("h2");
let h3=document.getElementById("h3");


// let hour=0;
// let minutes=0;
// let seconds=0;

// setInterval(() => {
//   seconds++;
//   h3.textContent=seconds
//   if (seconds>59) {
   
//   minutes++;
//   h2.textContent=minutes
// }
// }, 1000);

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let display = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
   h2.textContent=display;
}

startTimer();


