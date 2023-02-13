function countdown(num) {
  let x = [];
  if (num <= 3) {
    x.push(0);
    return x;
  } else {
    num -= 3;
    for (let i = num; i > 0; i -= 3) {
      if (i % 2 === 0) {
        x.push(i);
      }
    }
  }
  return x.sort((a, b) => a - b);
}

console.log(countdown(10));
console.log(countdown(23));
console.log(countdown(103));
console.log(countdown(15));
