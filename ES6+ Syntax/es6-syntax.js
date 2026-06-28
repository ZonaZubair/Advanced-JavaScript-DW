// ES6+ SYNTAX annotated exercises
// Run this file with: node es6-syntax.js

// ───────────────────────────────────────────
// Exercise 1: Destructuring an object
// ───────────────────────────────────────────

const user = { name: "Ali", age: 25, city: "Rawalpindi" };
const { name, city } = user; // pulling out only what we need

console.log("Exercise 1:");
console.log(name); // "Ali"
console.log(city); // "Rawalpindi"
console.log("---");


// ───────────────────────────────────────────
// Exercise 2: Destructuring an array
// ───────────────────────────────────────────

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

console.log("Exercise 2:");
console.log(firstColor);  // "red"
console.log(secondColor); // "green"
console.log("---");


// ───────────────────────────────────────────
// Exercise 3: Spread operator with arrays
// ───────────────────────────────────────────

const fruits = ["apple", "banana"];
const moreFruits = ["mango", "orange"];
const allFruits = [...fruits, ...moreFruits];

console.log("Exercise 3:");
console.log(allFruits); // ["apple", "banana", "mango", "orange"]
console.log("---");


// ───────────────────────────────────────────
// Exercise 4: Spread operator with objects
// ───────────────────────────────────────────

const baseConfig = { theme: "dark", language: "en" };
const userConfig = { ...baseConfig, language: "ur" }; // overrides "language"

console.log("Exercise 4:");
console.log(userConfig); // { theme: "dark", language: "ur" }
console.log("---");


// ───────────────────────────────────────────
// Exercise 5: Optional chaining
// ───────────────────────────────────────────

const profile = { name: "Zona" }; // no "social" property here

console.log("Exercise 5:");
console.log(profile?.social?.twitter); // undefined, no crash
// console.log(profile.social.twitter); // uncomment this to see it crash instead
console.log("---");

