const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const form = input[0];
const formArr = form.split("-");
const sumArr = [];

for (let n of formArr) {
  let sum = 0;
  const arr = n.split("+");
  for (let m of arr) {
    sum += parseInt(m);
  }
  sumArr.push(sum);
}

let result = sumArr[0];
for (let i = 1; i < sumArr.length; i++) {
  result -= sumArr[i];
}
console.log(result);
