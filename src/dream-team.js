const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  let answer = [];
  for(let i of members){
    if(typeof(members[i]) === "string"){
      answer.push(members[i].split('').filter(letter => letter !== ' ')[0]);
    } else {
      return false;
    }
  }
  if(answer.length <= 1) return false;
  answer = answer.join('').toUpperCase().split('').sort();
  return answer;
};
