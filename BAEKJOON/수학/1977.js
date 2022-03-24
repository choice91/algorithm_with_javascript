/**
 * 백준 1977번: 완전제곱수
 * 알고리즘 분류: 수학, 구현, 브루트포스 알고리즘
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1977_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input.map((n) => +n);
const nums = [];

for (let i = Math.ceil(Math.sqrt(m)); i <= Math.floor(Math.sqrt(n)); i++) {
  nums.push(i ** 2);
}

const sum = nums.reduce((acc, cur) => acc + cur, 0);

if (nums.length) {
  console.log(sum);
  console.log(nums[0]);
} else {
  console.log(-1);
}
