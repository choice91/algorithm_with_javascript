/**
 * 백준 2178번: 미로 탐색
 * 알고리즘 분류: 그래프 이론, 그래프 탐색, 너비 우선 탐색
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './2178_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((elem) => elem.trim());

const [N, M] = input.shift().split(' ').map(Number);
input = input.map((elem) => elem.split('').map(Number));

function solution(N, M, array) {
  const visited = Array.from({ length: N }, () => Array(M).fill(0));

  function bfs(x, y) {
    const queue = [];
    // 순서대로 오른, 아래, 왼, 위
    const xDir = [1, 0, -1, 0];
    const yDir = [0, 1, 0, -1];

    queue.push({ x, y });
    visited[x][y] = 1;

    while (queue.length) {
      const { x: xPos, y: yPos } = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextXDir = xPos + xDir[i];
        const nextYDir = yPos + yDir[i];

        if (nextXDir < 0 || nextYDir < 0 || nextXDir >= N || nextYDir >= M) {
          continue;
        }

        if (!visited[nextXDir][nextYDir] && array[nextXDir][nextYDir]) {
          visited[nextXDir][nextYDir] = visited[xPos][yPos] + 1;
          queue.push({ x: nextXDir, y: nextYDir });
        }
      }
    }
  }

  bfs(0, 0);

  return visited[N - 1][M - 1];
}

console.log(solution(N, M, input));
