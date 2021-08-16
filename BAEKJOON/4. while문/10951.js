const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 0;

while (i < input.length) {
  let nums = input[i].split(" ").map((x) => Number(x));

  console.log(nums[0] + nums[1]);

  i++;
}
