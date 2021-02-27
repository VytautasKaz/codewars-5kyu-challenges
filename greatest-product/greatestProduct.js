function greatestProduct(input) {
  let array = input.split("");
  let mult = 0;
  for (let i = 0; i <= array.length - 5; i++) {
    let x = array[i];
    for (let j = i + 1; j < i + 5; j++) {
      x *= array[j];
    }
    if (x > mult) {
      mult = x;
    }
  }
  return mult;
}
