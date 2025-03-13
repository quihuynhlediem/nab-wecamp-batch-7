const largestNumber = (firstNum, secondNum, thirdNum) => {
  if (firstNum > secondNum && firstNum > thirdNum) {
    return firstNum;
  } else if (secondNum > firstNum && secondNum > thirdNum) {
    return secondNum;
  }
  return thirdNum;
};

// Driver code
let firstNum = 3;
let secondNum = 1;
let thirdNum = 2;
console.log(largestNumber(firstNum, secondNum, thirdNum));