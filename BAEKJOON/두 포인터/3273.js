/**
 * 백준 3273번: 두 수의 합
 * 알고리즘 분류: 정렬, 두 포인터
 */
const PROBLEM_NUMBER = 3273;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const nums = input[1].split(' ').map(Number);
const x = +input[2];

function solution(n, nums, x) {
  let p1 = 0;
  let p2 = n - 1;
  let count = 0;
  let sum = 0;
  nums.sort((a, b) => a - b);

  while (p1 < p2) {
    sum = nums[p1] + nums[p2];

    if (sum === x) {
      count++;
      p1++;
      p2--;
    } else if (sum < x) {
      p1++;
    } else if (sum > x) {
      p2--;
    }
  }

  return count;
}

console.log(solution(n, nums, x));
