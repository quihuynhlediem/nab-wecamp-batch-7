// Promise.all returns an array of responses but just accept the fulfilled Promise only. If we want
// to catch the rejected, need to use try - catch

// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Both resolve, who is faster?
Promise.all([myPromise1, myPromise2]).then((x) => {
  console.log(x);
});



// By contrast we have the Promise.allSettle will return all promises and the status of these promises
// Create a Promise
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise3, myPromise4]).then((results) => results.forEach((x) => console.log(x)),
  
);



// Basic Promise code model
data = "text";
let fetchData = new Promise(function (resolve, reject) {
	setTimeout(resolve(data), 100);
});

fetchData.then((value) => { console.log(value) }
).then((value) => { console.log(value) });
