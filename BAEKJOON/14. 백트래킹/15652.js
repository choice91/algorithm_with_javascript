const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

[N, M] = input;
const visited = Array(+N).fill(false);
let answer = [];
let result = "";

function dfs(idx, cnt) {
  if (cnt === +M) {
    result += `${answer.join(" ")}\n`;
    return;
  }
  for (let i = idx; i < N; i++) {
    answer.push(i + 1);
    dfs(i, answer.length);
    answer.pop();
  }
}

dfs(0, 0);
console.log(result);
