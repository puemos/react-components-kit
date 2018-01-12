const path = require("path");

module.exports = {
  plugins: {
    "postcss-import": {
      root: path.join(__dirname, "../src"),
      path: [path.join(__dirname, "../src/components")]
    },
    "postcss-mixins": {},
    "postcss-each": {},
    "postcss-apply": {},
    "postcss-nesting": {},
    "postcss-cssnext": {},
    "postcss-reporter": {
      clearMessages: true
    }
  }
};
