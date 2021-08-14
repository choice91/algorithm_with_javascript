const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let result = input[i].split(" ");
  let num1 = Number(result[0]);
  let num2 = Number(result[1]);

  console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
