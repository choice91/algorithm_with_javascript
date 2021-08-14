const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const result = input[i].split(" ");
  console.log(Number(result[0]) + Number(result[1]));
}
