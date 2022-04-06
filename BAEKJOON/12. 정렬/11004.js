/**
 * 백준 11004번: K번째 수
 * 알고리즘 분류: 정렬
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './11004_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((el) =>
  el
    .trim()
    .split(' ')
    .map((n) => +n)
);

function solution(K, nums) {
  const sorted = nums.sort((a, b) => a - b);

  return sorted[K - 1];
}

const result = solution(input[0][1], input[1]);
console.log(result);
