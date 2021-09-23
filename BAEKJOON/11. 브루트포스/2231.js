const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const constructorArr = [];

function findConstructor(num) {
  const numArr = String(num)
    .split("")
    .map((n) => +n);
  const result = numArr.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);

  return result + num;
}

for (let i = 1; i <= N; i++) {
  if (findConstructor(i) === N) {
    constructorArr.push(i);
  }
}

constructorArr.sort((a, b) => a - b);

if (constructorArr.length === 0) {
  console.log(0);
} else {
  console.log(constructorArr[0]);
}
