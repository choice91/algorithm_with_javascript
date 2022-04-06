/**
 * 백준 9655번: 돌 게임
 * 알고리즘 분류: 수학, 다이나믹 프로그래밍, 게임 이론
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './9655_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  return input % 2 === 0 ? 'CY' : 'SK';
}

const result = solution(+input[0]);
console.log(result);
