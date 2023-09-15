"use strict";

const hourField = document.querySelector(".hour");
const minField = document.querySelector(".min");
const secField = document.querySelector(".sec");
const milSecField = document.querySelector(".mil-sec");
const btnStart = document.querySelector(".start-btn");
const btnReset = document.querySelector(".reset-btn");
const btnResume = document.querySelector(".resume-btn");
const btnStop = document.querySelector(".stop-btn");

let hour = 0;
let min = 0;
let sec = 0;
let milSec = 0;

const startTime = function () {
  milSec++;
  if (milSec === 100) {
    sec++;
    milSec = 0;
  }

  if (sec === 60) {
    min++;
    sec = 0;
  }

  if (min === 60) {
    hour++;
    min = 0;
  }

  milSecField.textContent = `${milSec}`.padStart(2, 0);
  secField.textContent = `${sec}`.padStart(2, 0);
  minField.textContent = `${min}`.padStart(2, 0);
  hourField.textContent = `${hour}`.padStart(2, 0);
};

let startWatch;
btnStart.addEventListener("click", () => {
  startWatch = setInterval(startTime, 10);

  btnStart.classList.add("hidden");
  btnStop.classList.remove("hidden");
});

btnStop.addEventListener("click", () => {
  clearInterval(startWatch);

  btnStop.classList.add("hidden");
  btnResume.classList.remove("hidden");
});

btnResume.addEventListener("click", () => {
  startWatch = setInterval(startTime, 10);

  btnResume.classList.add("hidden");
  btnStop.classList.remove("hidden");
});

btnReset.addEventListener("click", () => {
  clearInterval(startWatch);
  hour = 0;
  min = 0;
  sec = 0;
  milSec = 0;

  milSecField.textContent = `${milSec}`.padStart(2, 0);
  secField.textContent = `${sec}`.padStart(2, 0);
  minField.textContent = `${min}`.padStart(2, 0);
  hourField.textContent = `${hour}`.padStart(2, 0);

  btnStop.classList.add("hidden");
  btnResume.classList.add("hidden");
  btnStart.classList.remove("hidden");
});
