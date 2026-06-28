<h1>📓 JS Notes — Videos 36-51</h1>

<p>
Code-along notes and annotated exercises covering 4 core JavaScript topics.
</p>

---

## 📚 Topics

| File | Covers |
|---|---|
| `prototype-chain.md` + `.js` | How JS objects inherit through the prototype chain |
| `es6-syntax.md` + `.js` | Destructuring, spread operator, optional chaining |
| `generators-iterators.md` + `.js` | How generators and iterators work, and why they're useful |
| `es-modules-vs-commonjs.md` + `.mjs` (+ `math-helper.mjs`) | The difference between `import`/`export` and `require()`/`module.exports` |

Each topic has:
- A **`.md` notes file:** explains the concept in plain language with small examples
- A **runnable exercises file:** the same examples, but actually executable, with comments

---

## 🚀 How to Run

You need **Node.js** installed. Check with:

```bash
node -v
```

If that prints a version number, you're good. If not, install Node from [nodejs.org](https://nodejs.org).

Each one prints its exercises step by step to the terminal, with labeled `Exercise 1`, `Exercise 2`, etc.

> **Note:** `es-modules-vs-commonjs.mjs` uses the `.mjs` extension specifically as that's what tells Node to allow `import`/`export` syntax without extra setup.

---

├── math-helper.mjs
└── README.md
```
