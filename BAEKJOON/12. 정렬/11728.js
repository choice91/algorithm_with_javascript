/**
 * 백준 11728번: 배열 합치기
 * 알고리즘 분류: 정렬, 두 포인터
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './11728_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((value) => value.trim().split(' ').map(Number));

function solution(arrA, arrB) {
  return arrA
    .concat(arrB)
    .sort((a, b) => a - b)
    .join(' ');
}

function solution2(arrA, arrB) {
  const result = [];
  let indexA = 0;
  let indexB = 0;

  while (indexA < arrA.length || indexB < arrB.length) {
    if (indexA === arrA.length) {
      result.push(arrB[indexB]);
      indexB++;
      continue;
    }

    if (indexB === arrB.length) {
      result.push(arrA[indexA]);
      indexA++;
      continue;
    }

    if (arrA[indexA] > arrB[indexB]) {
      result.push(arrB[indexB]);
      indexB++;
    } else {
      result.push(arrA[indexA]);
      indexA++;
    }
  }

  return result.join(' ');
}

console.log(solution(input[1], input[2]));
console.log(solution2(input[1], input[2]));
