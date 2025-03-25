/* 
- Find the number closest to the target abs(target - output) min
- If there are 2 available:
  - Choose the smaller one
  - Choose the larger one
*/

function binarySearch(arr, target, left, right) {
	let mid = Math.floor((left + right) / 2);
	// console.log(mid);
	if (left > right) {
		return -1;
	}
	if (target < arr[mid] && Math.abs(target - arr[mid - 1]) < Math.abs(target - arr[mid])) {
		return binarySearch(arr, target, left, mid - 1);
	} else if (target > arr[mid] && Math.abs(target - arr[mid + 1]) > Math.abs(target - arr[mid])) {
		return binarySearch(arr, target, mid + 1, right);
  }
  return mid;
}

/* Driving Code */
const arr = [1, 3, 4, 5, 6];
let target = 2;
console.log(binarySearch(arr, target, 0, arr.length));