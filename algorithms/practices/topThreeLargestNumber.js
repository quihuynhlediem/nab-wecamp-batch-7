const largestNumber = (arr) => {
  let output = arr[0];
  for (const el of arr) {
    if (el > output) {
      output = el;
    }
  }
  return output;
}

const topThreeLargetNumber = (arr) => {
  for (let i = 0; i < 3; i++) {
    const largest = largestNumber(arr);
    console.log(largest);
    arr.splice(arr.indexOf(largest), 1);
  }
};

// Driver code
const arr = [10, 2, -1, 234, 2, 2];
topThreeLargetNumber(arr);