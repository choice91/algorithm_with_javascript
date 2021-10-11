const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = input.map((el) => el.split(" ").map((n) => +n));

const memory = {};

function w(a, b, c) {
  if (memory[`(${a}, ${b}, ${c})`]) {
    return memory[`(${a}, ${b}, ${c})`];
  } else {
    if (a <= 0 || b <= 0 || c <= 0) {
      return 1;
    }
    if (a > 20 || b > 20 || c > 20) {
      memory[`(${a}, ${b}, ${c})`] = w(20, 20, 20);
      return memory[`(${a}, ${b}, ${c})`];
    }
    if (a < b && b < c) {
      memory[`(${a}, ${b}, ${c})`] =
        w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
      return memory[`(${a}, ${b}, ${c})`];
    }
    memory[`(${a}, ${b}, ${c})`] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
    return memory[`(${a}, ${b}, ${c})`];
  }
}

for (let i = 0; i < testCase.length; i++) {
  const nums = testCase[i];
  if (nums[0] === -1 && nums[1] === -1 && nums[2] === -1) {
    break;
  }
  const result = w(nums[0], nums[1], nums[2]);
  console.log(`w(${nums[0]}, ${nums[1]}, ${nums[2]}) = ${result}`);
}
