/**
 * 백준 10798번: 세로읽기
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './10798_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const strings = input.map((v) => v.trim().split(''));
  const maxLength = Math.max(...strings.map((el) => el.length));
  let answer = '';

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < strings.length; j++) {
      answer += strings[j][i] || '';
    }
  }

  console.log(answer);
}

solution(input);
