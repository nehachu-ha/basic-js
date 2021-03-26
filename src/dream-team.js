const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // let answer = [];
  // for(let i of members){
  //   if(typeof(members[i]) === "string"){
  //     answer.push(members[i].split('').filter(letter => letter !== ' ')[0]);
  //   } else {
  //     return false;
  //   }
  // }
  // if(answer.length <= 1) return false;
  // answer = answer.join('').toUpperCase().split('').sort();
  // return answer;

  const ans = members.map((e) => {
    if (members === undefined || members === null || arguments.length === 0 || members.length <= 1  ) return false;

    if (typeof e === 'string') {
      return e.trim().substring(0, 1).toUpperCase();
    }
    return ans.sort().join('');
  })


};
