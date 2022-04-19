/**
 * 백준 2748번: 피보나치 수 2
 * 알고리즘 분류: 수학, 다이나믹 프로그래밍
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './2748_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  const memo = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    memo[i] = BigInt(memo[i - 1]) + BigInt(memo[i - 2]);
  }

  return memo[n].toString();
}

console.log(solution(+input[0]));
