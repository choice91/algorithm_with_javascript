/**
 * 백준 2752번: 세수정렬
 * 알고리즘 분류: 정렬
 */
const PROBLEM_NUMBER = 2752;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ').map(Number);

function solution(input) {
  return input.sort((a, b) => a - b).join(' ');
}

console.log(solution(input));
