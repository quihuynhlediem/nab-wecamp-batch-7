function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

// Driving code
console.log(sum(1, 2, 3));

function test() {
  console.log(arguments);
}
 
test("Qui", "Linh", "Nhat Minh");