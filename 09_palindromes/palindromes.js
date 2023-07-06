const palindromes = function (str) {
  str = str.toLowerCase().replace(/\s+/g, '');
  return isPalindrome(str);
};

const isPalindrome = function (str) {
  if (str.length < 2) {
    return true;
  }
  if (str.first() === str.last()) {
    return isPalindrome(str.substring(1, str.length()));
  }
  else {
    return false;
  }
}

// Do not edit below this line
module.exports = palindromes;
