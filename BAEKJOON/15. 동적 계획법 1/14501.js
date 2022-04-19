/**
 * 백준 14501번: 퇴사
 * 알고리즘 분류: 다이나믹 프로그래밍, 브루트포스 알고리즘
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './14501_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
input = input.map((value) => value.split(' ').map(Number));

function solution(resignationDate, consultationDate) {
  const memo = new Array(resignationDate).fill(0);

  for (let i = 0; i < resignationDate; i++) {
    const [date, cost] = consultationDate[i];

    if (i + date > resignationDate) continue;

    memo[i] += cost;

    for (let j = i + date; j < resignationDate; j++) {
      memo[j] = Math.max(memo[i], memo[j]);
    }
  }

  return memo;
}

console.log(Math.max(...solution(N, input)));
