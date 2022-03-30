/**
 * 백준 1032번: 명령 프롬프트
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './1032_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const fileCount = +input.shift();
  const fileNames = input.map((el) => el.trim());
  const result = [];

  for (let i = 0; i < fileNames[0].length; i++) {
    const alpha = fileNames[0][i];
    let isEqual = true;

    for (let j = 1; j < fileCount; j++) {
      if (alpha !== fileNames[j][i]) {
        isEqual = false;
        break;
      }
    }

    if (isEqual) {
      result.push(alpha);
    } else {
      result.push('?');
    }
  }

  console.log(result.join(''));
}

solution(input);
