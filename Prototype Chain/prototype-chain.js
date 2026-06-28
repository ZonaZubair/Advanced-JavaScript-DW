// PROTOTYPE CHAIN annotated exercises
// Run this file with: node prototype-chain.js

// ───────────────────────────────────────────
// Exercise 1: Basic prototype lookup
// ───────────────────────────────────────────

const animal = { eats: true };
const rabbit = Object.create(animal); // rabbit's prototype is "animal"

console.log("Exercise 1:");
console.log(rabbit.eats); // true -> found on the prototype, not on rabbit itself
console.log(rabbit.hops); // undefined -> doesn't exist anywhere in the chain
console.log("---");


// ───────────────────────────────────────────
// Exercise 2: Adding to the chain
// ───────────────────────────────────────────
// rabbit can have its OWN properties too, separate from its prototype.

rabbit.hops = true;

console.log("Exercise 2:");
console.log(rabbit.hops); // true -> now found directly on rabbit
console.log(rabbit.eats); // true -> still found via the prototype
console.log("---");


// ───────────────────────────────────────────
// Exercise 3: Checking where a property actually lives
// ───────────────────────────────────────────
// hasOwnProperty() tells you if a property is on the object ITSELF,
// not inherited from somewhere up the chain.

console.log("Exercise 3:");
console.log(rabbit.hasOwnProperty('hops')); // true -> own property
console.log(rabbit.hasOwnProperty('eats')); // false -> inherited, not "own"
console.log("---");


// ───────────────────────────────────────────
// Exercise 4: A 3-level chain
// ───────────────────────────────────────────

const livingThing = { breathes: true };
const animal2 = Object.create(livingThing);
animal2.eats = true;
const dog = Object.create(animal2);
dog.barks = true;

console.log("Exercise 4:");
console.log(dog.barks);    // true  -> own property
console.log(dog.eats);     // true  -> found 1 level up
console.log(dog.breathes); // true  -> found 2 levels up
console.log("---");
