/**
 * 백준 1072번: 게임
 * 알고리즘 분류: 수학, 이분 탐색
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './1072_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

/**
 * game: 게임 횟수
 * win: 이긴 횟수
 * rate: 승률
 */
function solution(game, win) {
  const rate = BigInt((win * 100n) / game);
  let low = 0n;
  let high = BigInt(1_000_000_000);
  let z = 0n;

  if (rate >= 99n || game === win) return -1;

  while (low <= high) {
    let mid = BigInt((low + high) / 2n);
    z = BigInt(((win + mid) * 100n) / (game + mid));

    if (z > rate) {
      high = mid - 1n;
    } else {
      low = mid + 1n;
    }
  }

  return low.toString();
}

console.log(solution(BigInt(input[0]), BigInt(input[1])));
