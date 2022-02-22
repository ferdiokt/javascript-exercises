const ftoc = function (temp) {
  const cel = (temp - 32) * (5 / 9);
  return parseFloat(cel.toFixed(1));
};

const ctof = function (temp) {
  const fah = (temp * 9) / 5 + 32;
  return parseFloat(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
