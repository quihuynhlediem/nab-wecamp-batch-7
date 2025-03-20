function throttle(func, wait) {
	let call = null;
	return function (...args) {
		if (!call) {
			func.apply(this, args);
		}
		call = setInterval(() => {
			func.apply(this, args);
		}, wait);
	};
}

const increment = throttle(function (delta) {
	this.val += delta;
}, 50);

const obj = {
	val: 2,
	increment,
};

console.log(obj.val);
obj.increment(3);
setTimeout(() => {
	console.log(obj.val);
}, 50);

setTimeout(() => {
	obj.increment(10);
	console.log(obj.val);
	// done();
}, 100);
