const passwordOptions = require('./first');

const highMaintenancePasswordOptions = (input) => {
  const validPasswords = passwordOptions(input).validPasswords;

  let digitCounts = validPasswords
    .map(x => {
      let counts = {};

      for (let i = 0; i < x.length; i++) {
        const digit = x[i];
        counts[digit] = counts[digit] ? counts[digit] + 1 : 1;
      }
      return counts;
    })
    .reduce((sums, currentSum) => {
      let twinCount = Object.keys(currentSum)
        .filter(key => currentSum[key] === 2);

      if (twinCount.length >= 1) {
        return sums + 1;
      }
      return sums;
    }, 0);

  return digitCounts
}

console.log(highMaintenancePasswordOptions('152085-670283'));
