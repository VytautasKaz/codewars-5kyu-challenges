function variance(numbers) {
  let mean =
    numbers.reduce((x, y) => {
      return x + y;
    }, 0) / numbers.length;

  let solution =
    numbers
      .map((x) => {
        return Math.pow(x - mean, 2);
      })
      .reduce((a, b) => {
        return a + b;
      }) / numbers.length;

  return solution;
}
