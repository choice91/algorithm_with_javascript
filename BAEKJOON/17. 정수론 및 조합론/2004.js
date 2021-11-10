const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function twoCount(n) {
  let count = 0;
  while (n >= 2) {
    count += parseInt(n / 2);
    n /= 2;
  }
  return count;
}

function fiveCount(n) {
  let count = 0;
  while (n >= 5) {
    count += parseInt(n / 5);
    n /= 5;
  }
  return count;
}

const [n, m] = input;

const two = twoCount(n) - (twoCount(m) + twoCount(n - m));
const five = fiveCount(n) - (fiveCount(m) + fiveCount(n - m));
console.log(Math.min(two, five));
