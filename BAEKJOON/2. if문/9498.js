const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

function solution(num) {
  if (num >= 90 && num <= 100) {
    console.log("A");
  } else if (num >= 80) {
    console.log("B");
  } else if (num >= 70) {
    console.log("C");
  } else if (num >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

input = +input;

solution(input);
