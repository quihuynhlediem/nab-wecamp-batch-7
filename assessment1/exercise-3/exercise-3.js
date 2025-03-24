/*
  Name: Huynh Le Diem Qui
  WeCamp Batch 7 - JS Assessment
  Exercise 3
*/

/* Solution */
function Timer() {
	let time = 0;
	let intervalId = null;

	return {
		start: function () {
			intervalId = setInterval(() => {
				time++;
				console.log(time);
				updateDisplay(time);
			}, 1000);
		},
		pause: function () {
			clearInterval(intervalId);
			updateDisplay(time);
		},
		reset: function () {
      time = 0;
      clearInterval(intervalId);
			this.start();
		},
	};
}

/* Driving code for testing the functions only */
const timer = Timer();
// timer.start(); // Should start counting up every second
// setTimeout(() => timer.pause(), 5000); // Pauses after 5 seconds
// setTimeout(() => timer.reset(), 7000); // Resets after 7 seconds

/* Intergrate with HTML */
let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let isRunning = false;
let difference;

function formatTime(ms) {
	let totalSeconds = Math.floor(ms);
	let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
	let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
	let seconds = String(totalSeconds % 60).padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay(time) {
	timerDisplay.textContent = formatTime(time);
}

startBtn.addEventListener("click", () => {
	if (!isRunning) {
		isRunning = true;
		timer.start();
	}
});

pauseBtn.addEventListener("click", () => {
	if (isRunning) {
		isRunning = false;
		timer.pause();
	}
});

resetBtn.addEventListener("click", () => {
  timer.reset();
});