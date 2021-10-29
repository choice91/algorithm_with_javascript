const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input.map((el) => el.split(" ").map((n) => +n));

const answer = [];
for (let i = 0; i < nums.length - 1; i++) {
  const num = nums[i];
  if (num[1] % num[0] === 0) {
    answer.push("factor");
  } else if (num[0] % num[1] === 0) {
    answer.push("multiple");
  } else {
    answer.push("neither");
  }
}
console.log(answer.join("\n"));
