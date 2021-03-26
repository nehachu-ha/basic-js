const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  let cats = 0;
  matrix.forEach((arr) => {
    arr.filter((item) => {
        if (item === "^^") {
          cats++;
        }
      });
  });
  return cats;
};
