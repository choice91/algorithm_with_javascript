/**
 * 백준 1924번: 2007년
 * 알고리즘 분류: 구현
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1924_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const result = new Date(`2007-${input[0]}-${input[1]}`);
const index = result.getDay();

console.log(day[index]);
