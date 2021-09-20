const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[0];
const answer = [];

function makeStar(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    answer.push(" ");
  } else {
    if (num === 1) {
      answer.push("*");
    } else {
      makeStar(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    makeStar(i, j, input);
  }
  answer.push("\n");
}

console.log(answer.join(""));
