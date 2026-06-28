# 1. Prototype Chain

## What it is

Every object in JavaScript has a hidden link to another object, its called **prototype**. When you try to access a property or method on an object, JS first looks on the object itself. If it's not there, it looks at the object's prototype. If it's still not there, it looks at *that* object's prototype, and so on until it either finds the property or reaches `null` (the end of the chain).

This is how built-in methods like `.toString()` or `.map()` work on objects/arrays even though you never wrote them yourself, they live on a prototype somewhere up the chain.

## Why it matters

It explains **inheritance** in JavaScript. Objects can share behavior without copying code, they just point to a shared prototype object.

## Simple example

```js
const animal = { eats: true };
const rabbit = Object.create(animal); // rabbit's prototype is now "animal"

console.log(rabbit.eats); // true: not found on rabbit itself, found on its prototype
console.log(rabbit.hops); // undefined: not found anywhere in the chain
```

## Visualizing the chain

```
rabbit  ->  animal  ->  Object.prototype  ->  null
```

JS walks left to right looking for the property, stopping as soon as it's found.

## Run the exercises

See `prototype-chain.js` in this folder. Run it with:

```bash
node prototype-chain.js
```

(or paste the code into your browser console)
