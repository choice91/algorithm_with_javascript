const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((n) => Number(n));
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let mul = String(input[0] * input[1] * input[2]);

for (let i = 0; i < mul.length; i++) {
  countArr[Number(mul[i])] += 1;
}

countArr.map((x) => {
  console.log(x);
});
