/**
 * 백준 14425번: 문자열 집합
 * 알고리즘 분류: 자료 구조, 문자열, 해시를 사용한 집합과 맵, 트리를 사용한 집합과 맵
 */
const PROBLEM_NUMBER = 14425;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [n, m] = input.shift().split(' ');

  const nSet = new Set(input.splice(0, +n).map((str) => str.trim()));
  const mArr = input.splice(0, +m).map((str) => str.trim());

  let count = 0;

  for (let str of mArr) {
    if (nSet.has(str)) count++;
  }

  // for (let i = 0; i < mArr.length; i++) {
  //   if (nArr.includes(mArr[i])) count++;
  // }

  return count;
}

console.log(solution(input));
