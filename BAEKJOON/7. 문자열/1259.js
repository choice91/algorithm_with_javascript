/**
 * 백준 1259번: 펜린드롬수
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1259_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const strings = input.map((n) => n.trim());

let answer = "";

for (let i = 0; i < strings.length - 1; i++) {
  const reverseStr = strings[i].split("").reverse().join("");
  if (strings[i] === reverseStr) {
    answer += "yes" + "\n";
  } else {
    answer += "no" + "\n";
  }
}

console.log(answer);
