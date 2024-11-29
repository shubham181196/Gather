const crypto = require('crypto');
function generateUniqueId() {
    return crypto.randomBytes(16).toString("hex"); // Generates a 32-character hexadecimal ID
  }

  module.exports = generateUniqueId;