/**
 * 백준 1292번: 쉽게 푸는 문제
 * 알고리즘 분류: 구현, 수학
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './1292_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ').map((n) => +n);

function solution(start, end) {
  const array = [];

  for (let i = 1; i <= end; i++) {
    for (let j = 0; j < i; j++) {
      array.push(i);
    }
  }

  const result = array
    .splice(start - 1, end - start + 1)
    .reduce((acc, cur) => acc + cur, 0);

  console.log(result);
}

solution(input[0], input[1]);
