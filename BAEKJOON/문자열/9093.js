/**
 * 백준 9093번: 단어 뒤집기
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './9093_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCaseCount = +input.shift();
const testCase = input;

for (let i = 0; i < testCaseCount; i++) {
  const words = testCase[i].trim().split(' ');
  const answer = [];

  for (let word of words) {
    if (word.length === 1) {
      answer.push(word);
    } else {
      answer.push(word.split('').reverse().join(''));
    }
  }

  console.log(answer.join(' '));
}
