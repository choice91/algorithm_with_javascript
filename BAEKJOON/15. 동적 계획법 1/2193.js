/**
 * 백준 2193번: 이친수
 * 알고리즘 분류: 다이나믹 프로그래밍
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './2193_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(N) {
  const memo = new Array(N + 1).fill(0);
  memo[0] = undefined;
  memo[1] = 1;
  memo[2] = 1;

  for (let i = 3; i <= N; i++) {
    memo[i] = BigInt(memo[i - 1]) + BigInt(memo[i - 2]);
  }

  return memo[N].toString();
}

console.log(solution(+input[0]));
