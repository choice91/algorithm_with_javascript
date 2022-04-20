/**
 * 백준 16401번: 과자 나눠주기
 * 알고리즘 분류: 이분 탐색, 매개 변수 탐색
 */
const PROBLEM_NUMBER = 16401;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map((n) => +n);
const length = input[1].split(' ').map((n) => +n);

function solution(m, n, snackLength) {
  let low = 0;
  let high = Math.max(...snackLength);
  let mid;
  let total;

  while (low <= high) {
    total = 0;
    mid = Math.floor((low + high) / 2);

    for (let snack of snackLength) {
      total += Math.floor(snack / mid);
    }

    if (total >= m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

console.log(solution(M, N, length));
