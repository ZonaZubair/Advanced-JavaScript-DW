# 2. ES6+ Syntax

Modern JavaScript added several shortcuts that make code shorter and safer to write. The three covered here are used constantly in real codebases.

## Destructuring

Pulls values out of arrays or objects directly into variables, instead of accessing them one by one.

```js
const user = { name: "Ali", age: 25 };
const { name, age } = user;
// same as: const name = user.name; const age = user.age;

const arr = [10, 20, 30];
const [first, second] = arr;
// first = 10, second = 20
```

## Spread operator (`...`)

Expands an array or object into its individual elements. Commonly used to copy or merge things without changing the original.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const newObj = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

## Optional chaining (`?.`)

Safely accesses nested properties without crashing if something in the middle is missing.

```js
const user = { name: "Ali" }; // no "address" property

console.log(user.address.city);  // ❌ throws an error
console.log(user?.address?.city); // ✅ undefined, no crash
```

## Run the exercises

See `es6-syntax.js` in this folder. Run it with:

```bash
node es6-syntax.js
```
