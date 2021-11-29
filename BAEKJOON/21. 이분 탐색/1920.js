const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1920_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, A, M, nums] = input;
const set = new Set(A.trim().split(" "));

const result = nums.split(" ").map((el) => (set.has(el) ? 1 : 0));

console.log(result.join("\n"));
