/**
 * 백준 1026번: 보물
 * 알고리즘 분류: 수학, 그리디 알고리즘, 정렬
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './1026_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0].trim();
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

function solution(N, A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.reduce((acc, cur, idx) => acc + cur * sortedB[idx], 0);
}

console.log(solution(N, A, B));
