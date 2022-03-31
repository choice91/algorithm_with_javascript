/**
 * 백준 10988번: 팬린드롬인지 확인하기
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './10988_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const reverseString = input.split('').reverse().join('');

  return input === reverseString ? 1 : 0;
}

console.log(solution(input[0]));
