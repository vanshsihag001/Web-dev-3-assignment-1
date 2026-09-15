/**
 * calculator.js
 * -------------
 * CLI-based calculator using process.argv
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 10 5
 *   node calculator.js sub 10 5
 *   node calculator.js mul 10 5
 *   node calculator.js div 10 5
 */

const logger = require("./modules/logger");

// process.argv[0] = node path, [1] = script path, [2..] = actual args
const [, , operation, num1Raw, num2Raw] = process.argv;

const validOps = ["add", "sub", "mul", "div"];

function printUsage() {
  console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
  console.log("Example: node calculator.js add 10 5");
}

if (!operation || num1Raw === undefined || num2Raw === undefined) {
  logger.warn("Missing arguments.");
  printUsage();
  process.exit(1);
}

const num1 = Number(num1Raw);
const num2 = Number(num2Raw);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  logger.error("Both num1 and num2 must be valid numbers.");
  printUsage();
  process.exit(1);
}

if (!validOps.includes(operation)) {
  logger.error(`Invalid operation "${operation}". Supported: ${validOps.join(", ")}`);
  printUsage();
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      logger.error("Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
}

logger.success(`Operation: ${operation} | ${num1} & ${num2}`);
console.log(`Result: ${result}`);
