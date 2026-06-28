// GENERATORS AND ITERATORS annotated exercises
// Run this file with: node generators-iterators.js

// ───────────────────────────────────────────
// Exercise 1: A basic generator
// ───────────────────────────────────────────

function* countTo3() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = countTo3();

console.log("Exercise 1:");
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true } -> nothing left
console.log("---");


// ───────────────────────────────────────────
// Exercise 2: Looping over a generator with for...of
// ───────────────────────────────────────────

function* countTo5() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

console.log("Exercise 2:");
for (const num of countTo5()) {
  console.log(num); // logs 1, 2, 3, 4, 5 one by one
}
console.log("---");


// ───────────────────────────────────────────
// Exercise 3: A generator with a loop inside it
// ───────────────────────────────────────────

function* countUpTo(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

console.log("Exercise 3:");
for (const num of countUpTo(4)) {
  console.log(num); // 1, 2, 3, 4
}
console.log("---");


// ───────────────────────────────────────────
// Exercise 4: An "infinite" generator (used carefully!)
// ───────────────────────────────────────────


function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}

console.log("Exercise 4:");
const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
// we just stop calling .next() as here it could keep going forever
console.log("---");
