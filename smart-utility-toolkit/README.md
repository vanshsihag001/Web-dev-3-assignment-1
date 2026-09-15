# Smart Utility Toolkit

**Course:** Web Dev III (Node.js & Express Backend)
**Unit:** Unit–1 · Lab Assignment 1
**Marks:** 2.5

A collection of small Node.js command-line and server utilities built entirely with
**core Node.js modules** (`process`, `http`, `fs`, `crypto`) — no external packages,
no frameworks, no database.

## Project Structure

```
smart-utility-toolkit/
├── calculator.js      # CLI calculator (process.argv)
├── app.js              # Demonstrates custom module reuse
├── server.js           # HTTP server with routing (http module)
├── fileManager.js      # File CRUD operations (fs module)
├── dice.js             # Random dice roller (crypto module)
├── test.txt             # Sample file used by fileManager.js
├── modules/
│   ├── isEven.js        # Custom module: checks if a number is even
│   └── logger.js        # Custom module: colored, timestamped logging
└── README.md
```

## Requirements

- Node.js (no external packages needed — everything is built-in)

## How to Run

### 1. CLI Calculator
```bash
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```
Supported operations: `add`, `sub`, `mul`, `div`. Invalid operations, missing args,
non-numeric input, and division by zero are all handled gracefully.

### 2. Custom Module Demo
```bash
node app.js
```
Shows `modules/isEven.js` and `modules/logger.js` being imported with `require()`
and reused together.

### 3. HTTP Server
```bash
node server.js
```
Then visit:
| Route      | Response          |
|------------|-------------------|
| `/`        | Welcome message   |
| `/about`   | About page        |
| `/contact` | Contact page      |
| anything else | 404 Error Message |

### 4. File Manager
```bash
node fileManager.js
```
Performs Create → Read → Update (append) → Read → Delete on `test.txt`, logging
each step to the terminal.

### 5. Dice Generator
```bash
node dice.js          # single roll
node dice.js 10       # roll 10 times
```
Uses `crypto.randomInt()` for secure randomness and appends each session's
results to `dice_history.txt` (bonus feature).

## Bonus Features Implemented

- ✅ Colored terminal output via ANSI escape codes (`modules/logger.js`)
- ✅ Timestamped logs in the logger module
- ✅ Dice roll history saved to a text file

## Learning Objectives Covered

- Running JavaScript outside the browser with Node.js
- Reading CLI input via `process.argv`
- Creating and reusing custom modules (`module.exports` / `require()`)
- Building a basic HTTP server with routing
- Performing CRUD file operations with `fs`
- Generating secure random values with `crypto`
- Observing sync vs. async behavior via console logs
