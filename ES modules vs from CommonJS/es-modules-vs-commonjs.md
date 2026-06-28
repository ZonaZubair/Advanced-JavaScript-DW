# 4. ES Modules vs CommonJS

JavaScript has two main systems for splitting code across files and importing/exporting things between them.

## CommonJS (the older system)

Used by default in Node.js for a long time. Uses `require()` to import and `module.exports` to export.

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const { add } = require('./math.js');
console.log(add(2, 3)); // 5
```

CommonJS is **synchronous** when you call `require()`, Node pauses and loads that file's content right there, on the spot.

## ES Modules (the modern standard)

Used in browsers and modern Node.js. Uses `import` and `export`.

```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

ES Modules are **static** imports are figured out before the code even runs, which lets tools optimize and bundle code more efficiently. This is also why ESM works well with `async` loading in browsers.

## Quick comparison

| | ES Modules | CommonJS |
|---|---|---|
| Syntax | `import` / `export` | `require()` / `module.exports` |
| Used in | Browsers + modern Node.js | Node.js (legacy/default for a long time) |
| Loading | Static: resolved before code runs | Dynamic: resolved when the line executes |
| File extension hint | `.mjs` or `"type": "module"` in package.json | `.cjs` or default `.js` in older Node projects |

## Why it matters

If you're working in a modern Node project or any frontend code (React, Vite, etc.), you'll almost always use ES Modules (`import`/`export`). You'll still see CommonJS (`require`) in older Node.js codebases or some npm packages.

## Note on running the example here

Because this is a Node environment, `import`/`export` syntax needs either:
- A file ending in `.mjs`, or
- `"type": "module"` set in a `package.json` file

The exercises file below is written as `.mjs` so it runs directly without extra setup.

## Run the exercises

See `es-modules-vs-commonjs.mjs` and `math-helper.mjs` in this folder. Run it with:

```bash
node es-modules-vs-commonjs.mjs
```
