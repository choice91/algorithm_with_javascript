const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[0];

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  if (n < 2) {
    return n;
  }

  return n * factorial(n - 1);
}
console.log(factorial(input));
