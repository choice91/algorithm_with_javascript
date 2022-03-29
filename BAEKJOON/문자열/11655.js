/**
 * 백준 11655번: ROT13
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './11655_input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const strings = input[0];
let answer = '';

/**
 * A: 65, Z: 90
 * a: 97, z: 122
 */

for (let i = 0; i < strings.length; i++) {
  const charCode = strings[i].charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    const upper = charCode + 13;
    if (upper > 90) {
      answer += String.fromCharCode(upper - 26);
    } else {
      answer += String.fromCharCode(upper);
    }
  } else if (charCode >= 97 && charCode <= 122) {
    const lower = charCode + 13;
    if (lower > 122) {
      answer += String.fromCharCode(lower - 26);
    } else {
      answer += String.fromCharCode(lower);
    }
  } else if (charCode === 32) {
    answer += ' ';
  } else {
    answer += strings[i];
  }
}

console.log(answer);
