/**
 * 백준 1269번: 대칭 차집합
 * 알고리즘 분류: 자료구조, 해시를 사용한 집합과 맵, 트리를 사용한 집합과 맵
 */
const PROBLEM_NUMBER = 1269;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function difference(arr1, arr2) {
  const diff = new Set(arr1);

  arr2.forEach((n) => {
    diff.delete(n);
  });

  return diff;
}

function solution(input) {
  const arrA = input[1].split(' ').map(Number);
  const arrB = input[2].split(' ').map(Number);

  const diffA = difference(arrA, arrB);
  const diffB = difference(arrB, arrA);

  return diffA.size + diffB.size;

  // const aDiff = arrA.filter((n) => !arrB.includes(n));
  // const bDiff = arrB.filter((n) => !arrA.includes(n));
  //
  // return aDiff.length + bDiff.length;
}

console.log(solution(input));
