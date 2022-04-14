/**
 * 백준 2512번: 예산
 * 알고리즘 분류: 이분 탐색, 매개 변수 탐색
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './2512_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((elem) => elem.trim());
const provinceBudgets = input[1].split(' ').map(Number);
const countryBudget = +input[2];

function binarySearch(provinceBudgets, countryBudget) {
  let low = 0;
  let high = provinceBudgets[provinceBudgets.length - 1];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const sum = provinceBudgets.reduce(
      (acc, cur) => acc + (cur > mid ? mid : cur),
      0
    );

    if (sum <= countryBudget) low = mid + 1;
    else high = mid - 1;
  }

  return high;
}

function solution(provinceBudgets, countryBudget) {
  provinceBudgets.sort((a, b) => a - b);
  return binarySearch(provinceBudgets, countryBudget);
}

console.log(solution(provinceBudgets, countryBudget));
