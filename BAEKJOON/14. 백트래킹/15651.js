const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

[N, M] = input;
const visited = Array(+N).fill(false);
let answer = [];
let result = "";

function dfs(cnt) {
  if (cnt === +M) {
    result += `${answer.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < N; i++) {
    visited[i] = true;
    answer.push(i + 1);
    dfs(cnt + 1);
    answer.pop();
    for (let j = 0; j < N; j++) {
      visited[j] = false;
    }
  }
}

dfs(0);
console.log(result);
