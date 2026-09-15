/**
 * fileManager.js
 * --------------
 * File manager utility using the core `fs` module.
 * Demonstrates Create, Read, Update, Delete operations on test.txt
 *
 * Run: node fileManager.js
 */

const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

// 1. CREATE
logger.info("Creating File...");
fs.writeFile(filePath, "Hello Node.js\n", (err) => {
  if (err) {
    logger.error(`Failed to create file: ${err.message}`);
    return;
  }
  logger.success("File Created");

  // 2. READ
  logger.info("Reading File...");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      logger.error(`Failed to read file: ${err.message}`);
      return;
    }
    console.log(data.trim());

    // 3. UPDATE (append)
    logger.info("Updating File...");
    fs.appendFile(filePath, "Learning FS Module\n", (err) => {
      if (err) {
        logger.error(`Failed to update file: ${err.message}`);
        return;
      }
      logger.success("File Updated");

      // Read again to show updated content
      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err) {
          logger.error(`Failed to read updated file: ${err.message}`);
          return;
        }
        console.log(updatedData.trim());

        // 4. DELETE
        logger.info("Deleting File...");
        fs.unlink(filePath, (err) => {
          if (err) {
            // Handle missing file gracefully
            if (err.code === "ENOENT") {
              logger.warn("File already missing, nothing to delete.");
            } else {
              logger.error(`Failed to delete file: ${err.message}`);
            }
            return;
          }
          logger.success("File Deleted");
        });
      });
    });
  });
});
