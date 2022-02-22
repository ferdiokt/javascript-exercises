const fibonacci = function (num) {
  let sequence = [];

  if (num < 0) {
    return "OOPS";
  } else {
    for (let i = 0; i < num; i++) {
      if (i <= 1) {
        sequence.push(1);
      } else {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
    }
    return sequence[num - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
