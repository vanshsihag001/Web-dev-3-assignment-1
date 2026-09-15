/**
 * dice.js
 * -------
 * Random dice generator using the core `crypto` module
 * (crypto.randomInt is used instead of Math.random() for
 * cryptographically secure randomness).
 *
 * Run: node dice.js
 * Optional: node dice.js 10   -> rolls the dice 10 times
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const historyFile = path.join(__dirname, "dice_history.txt");

function rollDice() {
  // crypto.randomInt(min, maxExclusive) -> secure random integer
  return crypto.randomInt(1, 7); // 1 to 6 inclusive
}

// Number of rolls can be passed as a CLI argument (defaults to 1)
const rolls = Number(process.argv[2]) > 0 ? Number(process.argv[2]) : 1;

logger.info(`Rolling dice ${rolls} time(s)...`);

const results = [];

for (let i = 1; i <= rolls; i++) {
  const value = rollDice();
  results.push(value);
  console.log(`Dice Rolled: ${value}`);
}

// Bonus: store dice roll history in a text file
const entry = `[${new Date().toISOString()}] Rolls: ${results.join(", ")}\n`;
fs.appendFile(historyFile, entry, (err) => {
  if (err) {
    logger.error(`Could not save roll history: ${err.message}`);
  } else {
    logger.success("Roll history saved to dice_history.txt");
  }
});
