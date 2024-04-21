const bcrypt = require("bcrypt");
const salt = 10;

function hashPassword(password) {
  return bcrypt.hash(password, salt);
}

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { hashPassword, comparePassword };
