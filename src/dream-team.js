const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  let res = [];
  if (Array.isArray(members)) {
    members.forEach((elem) => {
      if (typeof elem === 'string') {
        res.push(elem.toUpperCase().trim().charAt());
      } else {
        return false;
      }
    });
    return res.sort().join('');
  } else {
    return false;
  }
};
