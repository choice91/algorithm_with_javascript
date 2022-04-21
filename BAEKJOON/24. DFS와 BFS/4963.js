/**
 * 백준 4963번: 섬의 개수
 * 알고리즘 분류: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */
const PROBLEM_NUMBER = 4963;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  input = input.map((v) => v.split(' ').map(Number));

  let [w, h] = input.shift();
  let graph;
  let visited;
  let cnt = 0;
  const result = [];

  function dfs(x, y) {
    visited[x][y] = 1;

    const dx = [0, 1, 0, -1, 1, 1, -1, -1];
    const dy = [1, 0, -1, 0, 1, -1, 1, -1];

    for (let i = 0; i < 8; i++) {
      let nextX = x + dx[i];
      let nextY = y + dy[i];

      if (nextX >= 0 && nextY >= 0 && nextX < h && nextY < w) {
        if (visited[nextX][nextY] === 0 && graph[nextX][nextY]) {
          dfs(nextX, nextY);
        }
      }
    }
  }

  while (w !== 0 && h !== 0) {
    graph = input.splice(0, h);
    visited = Array.from({ length: h }, () => new Array(w).fill(0));

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (graph[i][j] === 1 && visited[i][j] === 0) {
          dfs(i, j);
          cnt++;
        }
      }
    }

    [w, h] = input.shift();
    result.push(cnt);
    cnt = 0;
  }

  return result.join('\n');
}

console.log(solution(input));
