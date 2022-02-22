const repeatString = function (text, repeat) {
  let a = repeat;
  let finaltext = [];

  if (a == 0) {
    return "";
  } else if (a > 0) {
    for (i = 0; i < a; i++) {
      finaltext.push(text);
    }
    return finaltext.join("");
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
