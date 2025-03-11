// Common solution:
const isEven = (n) => {
	if (n % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

// Using bitwise operator:
const isOdd = (n) => {
	if (n & 1) {
		return true;
	}
	return false;
};

console.log(isEven(10)); // true
console.log(isOdd(5)); // true
