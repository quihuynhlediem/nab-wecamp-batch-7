function binarySearch(arr, target, left, right) {
	let mid = Math.floor((left + right) / 2);
	// console.log(mid);
	if (left > right) {
		return -1;
	}
	if (target === arr[mid]) {
		return mid;
	}
	if (target < arr[mid]) {
		return binarySearch(arr, target, left, mid - 1);
	} else {
		return binarySearch(arr, target, mid + 1, right);
	}
}

/* Driving Code */
const arr = [1, 3, 4, 5, 6];
let target = 5;
console.log(binarySearch(arr, target, 0, arr.length));
