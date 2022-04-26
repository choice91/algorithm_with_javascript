/**
 * 백준 1940번: 주몽
 * 알고리즘 분류: 정렬, 두 포인터
 */
const PROBLEM_NUMBER = 1940;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const M = +input[1];
const uniqueNo = input[2].split(' ').map(Number);

function solution(n, m, uniqueNo) {
  uniqueNo.sort((a, b) => a - b);

  let start = 0;
  let end = n - 1;
  let count = 0;

  while (start < end) {
    if (uniqueNo[start] + uniqueNo[end] === m) {
      count++;
      start++;
      end--;
    } else if (uniqueNo[start] + uniqueNo[end] > m) {
      end--;
    } else if (uniqueNo[start] + uniqueNo[end] < m) {
      start++;
    }
  }

  return count;
}

console.log(solution(N, M, uniqueNo));
