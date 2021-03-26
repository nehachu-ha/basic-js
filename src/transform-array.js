const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(arguments.length === 0 || !Array.isArray(arr)) throw new Error();
  let newArr = [];
  for(let i = 0;i<arr.length;i+=1){

    if(arr[i] === "--discard-next" && i<arr.length ){
      newArr.push(undefined);
      i+=1;

    } else if(arr[i] === "--discard-prev" && i > 0 ){
      newArr.pop();
    } else if(arr[i] === "--double-next" && i < arr.length ){
      newArr.push(arr[i + 1]);
    } else if(arr[i] === "--double-prev" && i > 0 ){
      newArr.push(newArr[newArr.length - 1]);
    }
    else if(arr[i] !== "--discard-next" && arr[i] !== "--discard-prev" && arr[i] !== "--double-next" && arr[i] !== "--double-prev"){
      newArr.push(arr[i]);
    }
  }
  newArr = newArr.filter((x) => {
    return x !== undefined;
  });

  return newArr;
};
