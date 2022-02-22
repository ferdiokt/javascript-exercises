const caesar = function (text, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shiftedAlphabet = shifter(alphabet, shift);
  const shiftedUpperAlphabet = shifter(upperAlphabet, shift);
  let result = "";
  textArray = text.split("");
  for (let i = 0; i < textArray.length; i++) {
    let currentLetter = textArray[i];
    if (currentLetter.match(/[A-Z]/)) {
      let currentIndex = upperAlphabet.indexOf(currentLetter);
      result += shiftedUpperAlphabet[currentIndex];
    } else if (currentLetter.match(/[a-z]/)) {
      let currentIndex = alphabet.indexOf(currentLetter);
      result += shiftedAlphabet[currentIndex];
    } else {
      result += currentLetter;
    }
  }
  return result;
};

const shifter = function (text, shift) {
  if (shift > 26 || shift < -26) {
    let newshift = shift % 26;
    return text.slice(newshift) + text.slice(0, newshift);
  } else {
    return text.slice(shift) + text.slice(0, shift);
  }
};

// Do not edit below this line
module.exports = caesar;
