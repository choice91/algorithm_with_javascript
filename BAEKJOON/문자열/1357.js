/**
 * 백준 1357번: 뒤집힌 덧셈
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1357_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const [x, y] = input.map((n) => +n);

function rev(value) {
  return +value.toString().split("").reverse().join("");
}

const result = rev(rev(x) + rev(y));

console.log(result);
