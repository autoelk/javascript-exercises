const sumAll = function (l, r) {
  if (l > r) {
    const temp = l;
    l = r
    r = temp;
  }

  if (l < 0 || r < 0 || !Number.isInteger(l) || !Number.isInteger(r)) {
    return 'ERROR';
  }

  let sum = 0;
  for (let num = l; num <= r; num++) {
    sum += num;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
