const typescript = require('../typescript');

module.exports = {
  ...typescript,
  extends: ["react-app", "react-app/jest", "standard-with-typescript"],
};
