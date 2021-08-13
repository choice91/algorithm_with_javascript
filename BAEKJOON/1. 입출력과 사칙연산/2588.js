const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(a, b) {
  // const _b = b.toString();
  // const b1 = +_b[2];
  // const b10 = +_b[1];
  // const b100 = +_b[0];
  // console.log(a * b1);
  // console.log(a * b10);
  // console.log(a * b100);
  console.log(a * Math.floor(b % 10));
  console.log(a * Math.floor((b / 10) % 10));
  console.log(a * Math.floor(b / 100));
  console.log(a * b);
}
