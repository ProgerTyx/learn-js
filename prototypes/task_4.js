// Add the decorating "defer()" to functions

Function.prototype.defer = function (delay) {
  let fn = this;

  return function (...args) {
    setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

function f(a, b) {
  console.log( a + b );
}

let user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
}

user.sayHi = user.sayHi.defer(1000);
user.sayHi();

f.defer(3000)(1, 2); // shows 3 after 1 second