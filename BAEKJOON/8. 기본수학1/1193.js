const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

X = Number(input[0]);
let groupNumber = 0;

while (X > 0) {
  groupNumber += 1;
  X -= groupNumber;
  console.log(groupNumber, X);
}

if (groupNumber % 2 === 0) {
  console.log(`${groupNumber + X}/${1 - X}`);
} else {
  console.log(`${1 - X}/${groupNumber + X}`);
}
