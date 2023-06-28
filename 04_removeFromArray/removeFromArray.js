const removeFromArray = function (arr, ...rem) {
  return arr.filter(x => !rem.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
