// 알파벳 개수 (문자열)
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./10808_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const idx = input[i].charCodeAt(0) - 97;
  result[idx] += 1;
}
console.log(result.join(" "));
