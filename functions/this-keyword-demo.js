const person = {
  name: "Qui",
  greeting: function () { console.log("Hello " + this.name) }
}

const person1 = {
  name: "Minh",
  greeting: function () { console.log("Hello " + this.name) }
}

// person.greeting();

globalThis.name = "Linh";
const greet = person.greeting;
// greet();

// bind(), apply(), call() of function

// For arrow functions
let outerFn = {
  name: "Qui",
  greeting: () => {
    console.log(`Hello ${this.name}`);
  },
  greetingv2: function () {
    const greetingv2 =  () => {
      console.log(`Hello ${this.name}`);
    }
    greetingv2();
   }
}

outerFn.greeting();
outerFn.greetingv2();