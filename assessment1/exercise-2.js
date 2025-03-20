/*
  Name: Huynh Le Diem Qui
  WeCamp Batch 7 - JS Assessment
  Exercise 2
*/

/* Solution */
function Counter() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
    },
    decrement: function () {
      counter--;
    },
    reset: function () {
      counter = 0;
    },
    getValue: function () {
      return counter;
    }
  }
}
 
/* Driving code */
const counter = Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Should print 2
counter.decrement();
console.log(counter.getValue()); // Should print 1
counter.reset();
console.log(counter.getValue()); // Should print 0