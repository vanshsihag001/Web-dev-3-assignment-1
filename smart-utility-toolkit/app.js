/**
 * app.js
 * ------
 * Demonstrates custom module creation & reusability.
 * Imports the isEven and logger modules and uses them together.
 *
 * Run: node app.js
 */

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.info("Starting module reusability demo...");

const numbers = [2, 7, 10, 15, 42, 101];

numbers.forEach((n) => {
  if (isEven(n)) {
    logger.success(`${n} is EVEN`);
  } else {
    logger.warn(`${n} is ODD`);
  }
});

logger.info("Demo complete.");
