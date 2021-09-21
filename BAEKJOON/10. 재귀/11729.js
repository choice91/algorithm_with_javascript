const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let count = 0;
const answer = [];

function hanoi(n, from, temp, to) {
  if (n === 0) return;

  hanoi(n - 1, from, to, temp);
  answer.push([from, to]);
  count += 1;
  hanoi(n - 1, temp, from, to);
}

hanoi(input, 1, 2, 3);
console.log(count);
console.log(answer.map((el) => el.join(" ")).join("\n"));
