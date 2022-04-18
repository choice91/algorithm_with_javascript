/**
 * 백준 11724번: 연결 요소의 개수
 * 알고리즘 분류: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './11724_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function dfs(start, graph, visited) {
  visited[start] = true;

  for (let i = 0; i < graph[start].length; i++) {
    const nextVertex = graph[start][i];

    if (!visited[nextVertex]) {
      dfs(nextVertex, graph, visited);
    }
  }
}

function solution(input) {
  const [vertex, edge] = input.shift().split(' ').map(Number);
  input = input.map((elem) => elem.split(' ').map(Number));
  const graph = [];
  const visited = new Array(vertex + 1).fill(false);
  let count = 0;

  for (let i = 0; i <= vertex; i++) {
    graph[i] = [];
  }

  for (let value of input) {
    const [from, to] = value;

    graph[from].push(to);
    graph[to].push(from);
  }

  for (let i = 1; i <= vertex; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited);
      count++;
    }
  }

  console.log(count);
}

solution(input);
