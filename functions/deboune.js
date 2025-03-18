const debounce = (func, wait) => {
  let timeId = null; 
  return function(...args) {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => { func.apply(this, args) }, wait);
  };
}

const increment = debounce(function (delta) {
  this.val += delta;
  console.log(this);
}, 10);

const obj = {
  val: 2,
  increment,
};

console.log(obj.val);
obj.increment(3);
console.log(obj.val);

setTimeout(() => {
  console.log(obj.val);
}, 200);