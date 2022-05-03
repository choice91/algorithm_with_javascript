/**
 * 백준 2851번: 슈퍼 마리오
 * 알고리즘 분류: 구현, 브루트포스 알고리즘, 누적 합
 */
const PROBLEM_NUMBER = 2851;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(Number);

function solution(nums) {
  let sum = 0;

  for (let num of nums) {
    sum += num;

    if (sum >= 100) {
      if (sum - 100 > 100 - (sum - num)) {
        sum -= num;
      }
      break;
    }
  }

  return sum;
}

console.log(solution(input));
