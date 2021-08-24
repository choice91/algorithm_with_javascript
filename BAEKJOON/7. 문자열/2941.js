const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];

const croatiaAlphaArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alpha of croatiaAlphaArr) {
  input = input.split(alpha).join("*");
}
console.log(input.length);
