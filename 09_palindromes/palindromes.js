const palindromes = function (text) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  let nocaps = text.toLowerCase();
  let punctuationless = nocaps.replace(regex, "");
  let reversed = punctuationless.split("").reverse().join("");

  if (punctuationless == reversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
