if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/testlhx.min.js");
  } else {
    module.exports = require("./dist/testlhx.js");
  }
  