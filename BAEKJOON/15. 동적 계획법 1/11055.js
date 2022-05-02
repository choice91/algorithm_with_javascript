/**
 * 백준 11055번: 가장 큰 증가 부분 수열
 * 알고리즘 분류: 다이나믹 프로그래밍
 */
const PROBLEM_NUMBER = 11055;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);

function solution(N, nums) {
  const memo = [];

  for (let i = 0; i < nums.length; i++) {
    memo[i] = nums[i];

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && memo[i] < nums[i] + memo[j]) {
        memo[i] = nums[i] + memo[j];
      }
    }
  }

  return Math.max(...memo);
}

console.log(solution(N, nums));
