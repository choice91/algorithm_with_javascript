/**
 * 백준 1806번: 부분합
 * 알고리즘 분류: 두 포인터
 */
const PROBLEM_NUMBER = 1806;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const inputs = input[1].split(' ').map(Number);

function solution(N, S, inputs) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sum = inputs[0];
  let minLength = Infinity;

  while (rightIndex < N) {
    if (sum >= S) {
      minLength = Math.min(minLength, rightIndex - leftIndex + 1);
      sum -= inputs[leftIndex++];
    } else {
      rightIndex++;
      if (rightIndex === N) break;
      sum += inputs[rightIndex];
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

const result = solution(N, S, inputs);
console.log(result);
