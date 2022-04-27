/**
 * 백준 1764번: 듣보잡
 * 알고리즘 분류: 자료구조, 문자열, 정렬, 해시를 사용한 집합과 맵
 */
const PROBLEM_NUMBER = 1764;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const names = input.slice(1).map((v) => v.trim());

function solution(n, m, names) {
  // 듣도 못한 사람
  const arr1 = new Set(names.slice(0, n).sort());
  // 보도 못한 사람
  const arr2 = new Set(names.slice(n).sort());

  const result = [...arr1].filter((v) => arr2.has(v));

  return {
    length: result.length,
    name: result,
  };
}

const { length, name } = solution(N, M, names);

console.log(length);
console.log(name.join('\n'));
