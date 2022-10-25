const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const avatarUpdate = require("./avatarUpdate");
const verifyEmail = require("./verifyEmail");
const resendEmail = require("./resendEmail");

module.exports = {
  signup,
  login,
  getCurrent,
  logout,
  avatarUpdate,
  verifyEmail,
  resendEmail,
};
