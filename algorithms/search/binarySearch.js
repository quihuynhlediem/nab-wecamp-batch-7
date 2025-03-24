function binarySearch(target, left, right) {
  let mid = Math.floor(left + right / 2);
  if (left >= right) {
    return -1;
   }
  if (target === arr[mid]) {
    return mid;
  }
  if (target < arr[mid]) {
    return binarySearch(target, left, mid - 1);
  } else {
    return binarySearch(target, mid + 1, right);
   }
}
 
/* Driving Code */
const arr = [1, 3, 4, 5, 6];
let target = 3;
console.log(binarySearch(3, 0, 4));