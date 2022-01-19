const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2981_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const nums = input.map((n) => +n);
nums.sort((a, b) => a - b);
const result = [];

function getGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return getGCD(b, a % b);
  }
}

let gcd = nums[1] - nums[0];

for (let i = 2; i < N; i++) {
  gcd = getGCD(gcd, nums[i] - nums[i - 1]);
}

for (let j = 2; j <= gcd; j++) {
  if (gcd % j === 0) {
    result.push(j);
  }
}
console.log(result.join(" "));
