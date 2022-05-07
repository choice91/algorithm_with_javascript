/**
 * 백준 2470번: 두 용액
 * 알고리즘 분류: 정렬, 이분탐색, 두 포인터
 */
const PROBLEM_NUMBER = 2470;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);

function solution(N, nums) {
  nums.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = N - 1;
  let sum = 0;
  let temp = Infinity;
  let result = [];

  while (p1 < p2) {
    sum = nums[p1] + nums[p2];

    if (temp > Math.abs(sum)) {
      temp = Math.abs(sum);
      result = [nums[p1], nums[p2]];
    }

    if (sum < 0) p1++;
    else p2--;
  }

  return result.join(' ');
}

console.log(solution(N, nums));
