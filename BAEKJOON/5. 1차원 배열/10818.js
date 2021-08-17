const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let nums = input[1].split(" ").map((n) => Number(n));

nums.sort((a, b) => {
  //   if (a > b) return 1;
  //   if (a === b) return 0;
  //   if (a < b) return -1;
  return a - b;
});

console.log(nums[0], nums[nums.length - 1]);
