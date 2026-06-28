// ES MODULES vs COMMONJS annotated exercises
// Run this file with: node es-modules-vs-commonjs.mjs
//
// Note: this file uses the .mjs extension specifically so Node
// treats it as an ES Module and allows "import" syntax directly,
// without needing extra config.

// ───────────────────────────────────────────
// Exercise 1: Named imports
// ───────────────────────────────────────────
// "add" and "multiply" are NAMED exports from math-helper.mjs,
// so import them using curly braces and the names must match.

import { add, multiply } from './math-helper.mjs';

console.log("Exercise 1:");
console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
console.log("---");


// ───────────────────────────────────────────
// Exercise 2: Default import
// ───────────────────────────────────────────
// "greet" was exported using "export default" in math-helper.mjs,
// so import it WITHOUT curly braces, and can name it anything
// I want on this side (calling it "greet" here too, but
// it doesn't have to match).

import greet from './math-helper.mjs';

console.log("Exercise 2:");
console.log(greet("Zona")); // "Hello, Zona!"
console.log("---");


// ───────────────────────────────────────────
// Exercise 3: Comparing to CommonJS (side-by-side, not run)
// ───────────────────────────────────────────
// This block is just for comparison as CommonJS syntax doesn't
// run in an .mjs file, so it's commented out.
//
//   // math-helper.js (CommonJS version)
//   function add(a, b) { return a + b; }
//   function multiply(a, b) { return a * b; }
//   module.exports = { add, multiply };
//
//   // app.js (CommonJS version)
//   const { add, multiply } = require('./math-helper.js');
//   console.log(add(2, 3));

console.log("Exercise 3:");
console.log("See the comments above for the CommonJS equivalent.");
console.log("---");



