/**
 * 백준 2003번: 수들의 합 2
 * 알고리즘 분류: 두 포인터
 */
const PROBLEM_NUMBER = 2003;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

function solution(N, M, nums) {
  let first = 0;
  let second = 0;
  let sum = nums[first];
  let count = 0;

  while (first < N && second < N) {
    if (sum < M) {
      sum += nums[++second];
    } else if (sum > M) {
      sum -= nums[first++];
    } else if (sum === M) {
      count++;
      sum += nums[++second];
    }
  }

  return count;
}

console.log(solution(N, M, nums));
