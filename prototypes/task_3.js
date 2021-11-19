// Add method "f.defer(ms)" to functions

Function.prototype.defer = function (timeout) {
  setTimeout(this, timeout)
}

function f() {
  console.log("Hello!");
}

f.defer(1000);