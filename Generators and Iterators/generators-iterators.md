# 3. Generators and Iterators

## Iterators

An **iterator** is any object that has a `.next()` method, and that method returns an object shaped like `{ value, done }`. `value` is the current item, and `done` tells you whether there's anything left.

Arrays, strings, and Maps are all "iterable" in JS" meaning you can loop over them with `for...of`, because under the hood they provide an iterator.

## Generators

Writing your own iterator by hand is a bit tedious. A **generator function** (written with `function*`) makes this easy. Inside it, you use `yield` to pause and return a value, then the function "remembers" where it paused, and resumes from there the next time `.next()` is called.

```js
function* countTo3() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = countTo3();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

## Usability

Generators are great for:
- **Lazy evaluation:** generating values one at a time instead of building a huge array upfront
- **Infinite sequences:** a generator can keep producing values forever without crashing memory, since it only computes the next value when asked
- **Pausable logic:** useful in some async patterns

## Run the exercises

See `generators-iterators.js` in this folder. Run it with:

```bash
node generators-iterators.js
```
