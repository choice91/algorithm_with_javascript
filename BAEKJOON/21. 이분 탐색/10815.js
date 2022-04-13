/**
 * 백준 10815번: 숫자 카드
 * 알고리즘 분류: 정렬, 이분 탐색
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './10815_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, nList, M, mList] = input.map((el) =>
  el.trim().split(' ').map(Number)
);

function binarySearch(list, num) {
  let startIndex = 0;
  let endIndex = list.length - 1;

  while (startIndex <= endIndex) {
    let mid = Math.floor((startIndex + endIndex) / 2);

    if (num > list[mid]) {
      startIndex = mid + 1;
    } else if (num < list[mid]) {
      endIndex = mid - 1;
    } else {
      return 1;
    }
  }

  return 0;
}

function solution(N, nList, M, mList) {
  nList.sort((a, b) => a - b);

  const result = [];

  for (let num of mList) {
    result.push(binarySearch(nList, num));
  }

  return result.join(' ');
}

console.log(solution(N, nList, M, mList));
