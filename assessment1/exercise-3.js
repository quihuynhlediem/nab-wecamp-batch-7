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
      start: function() {
        intervalId = setInterval(() => {
          time++;
          console.log(time);
        }, 1000);
      },
      pause: function() {
        clearInterval(intervalId);
      },
      reset: function() {
        time = 0;
        this.start();
      }
  };
}

/* Driving code */
const timer = Timer();
timer.start(); // Should start counting up every second
setTimeout(() => timer.pause(), 5000); // Pauses after 5 seconds
// setTimeout(() => timer.reset(), 7000); // Resets after 7 seconds