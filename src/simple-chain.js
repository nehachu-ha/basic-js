const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (arguments.length === 0) {
      this.arr.push(" ");
    }
    this.arr.push(value);
    return this;
  },

  removeLink(position) {
    if (
      this.arr[position - 1] === undefined ||
      typeof position !== "number"
    ) {
      this.arr = [];
      throw new Error();
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = this.arr.reduce((acm, elem, ind) => {
      if (ind === 0) {
        acm += `( ${elem} )`;
        return acm;
      } else {
        acm += `~~( ${elem} )`;
        return acm;
      }
    }, "");
    this.arr = [];
    return result;
  }

};

module.exports = chainMaker;
