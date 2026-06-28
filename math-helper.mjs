// This is a small helper file that we'll import into the main
// exercises file using ES Module syntax (export / import).

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// "export default" marks the MAIN thing this file exports.
// It can be imported without curly braces.
export default function greet(name) {
  return `Hello, ${name}!`;
}
