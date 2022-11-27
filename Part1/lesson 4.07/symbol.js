
const symbol1 = Symbol('1');
const symbol2 = Symbol('2');

console.log(symbol1 === symbol2); // Outputs False

const symbol3 = new Symbol('symbol3');

// Outputs: Uncaught TypeError: Symbol is not a constructor 