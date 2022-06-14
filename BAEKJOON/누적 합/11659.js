/**
 * 백준 11659번: 구간 합 구하기 4
 * 알고리즘 분류: 누적 합
 */
const PROBLEM_NUMBER = 11659;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const nums = input[1].split(' ').map(Number);
  const cumulativeSum = new Array(nums.length + 1).fill(0);
  const sumArr = input.slice(2);
  const answer = [];

  nums.forEach((num, index) => {
    cumulativeSum[index + 1] = cumulativeSum[index] + num;
  });

  for (let str of sumArr) {
    const [start, end] = str.split(' ').map(Number);
    answer.push(cumulativeSum[end] - cumulativeSum[start - 1]);
  }

  return answer.join('\n');
}

console.log(solution(input));
