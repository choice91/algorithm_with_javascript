/**
 * 백준 1699번: 제곱수의 합
 * 알고리즘 분류: 수학, 다이나믹 프로그래밍
 */
const PROBLEM_NUMBER = 11722;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const length = +input[0];
const array = input[1].split(' ').map(Number);

function solution(length, arr) {
  const memo = new Array(length).fill(1);

  for (let i = 0; i < length; i++) {
    let max = 0;

    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j] && memo[j] > max) {
        memo[i] = memo[j] + 1;
        max = memo[j];
      }
    }
  }

  return Math.max(...memo);
}

console.log(solution(length, array));
