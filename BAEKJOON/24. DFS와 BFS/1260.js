const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1260_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input
  .shift()
  .split(" ")
  .map((n) => +n);
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
input.forEach((point) => {
  const [x, y] = point.split(" ").map((n) => +n);
  graph[x][y] = 1;
  graph[y][x] = 1;
});
const visited1 = new Array(N + 1).fill(false);
const visited2 = new Array(N + 1).fill(false);
const dfsResult = [];
const bfsResult = [];

function dfs(v) {
  visited1[v] = true;
  dfsResult.push(v);
  for (let i = 1; i < N + 1; i++) {
    if (!visited1[i] && graph[v][i] === 1) {
      dfs(i);
    }
  }
}

function bfs(v) {
  const needVisited = [v];
  bfsResult.push(v);
  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    visited2[node] = true;
    for (let i = 1; i < N + 1; i++) {
      if (!visited2[i] && graph[node][i] === 1) {
        visited2[i] = true;
        needVisited.push(i);
        bfsResult.push(i);
      }
    }
  }
}

dfs(V);
console.log(dfsResult.join(" "));
bfs(V);
console.log(bfsResult.join(" "));
