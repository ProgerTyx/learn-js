// Searching algorithm

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed
};

function bench1 () {
  console.time('bench1');
  console.log(pockets.glasses);
  console.timeEnd('bench1');
}

function bench2 () {
  console.time('bench2');
  console.log(bed.glasses);
  console.timeEnd('bench2');
}

bench1()
bench2()

bench1()
bench2()
