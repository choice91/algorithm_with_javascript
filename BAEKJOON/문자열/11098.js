/**
 * 백준 11098번: 첼시를 도와줘!
 * 알고리즘 분류: 구현, 문자열
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './11098_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((v) => v.trim());

function solution(input) {
  const testCase = +input.shift();
  const result = [];

  for (let i = 0; i < testCase; i++) {
    const playerCount = +input.shift();
    const players = input.splice(0, playerCount);
    const dict = {};

    players.forEach((player) => {
      const [price, name] = player.split(' ');
      dict[price] = name;
    });

    let max = 0;

    for (let key in dict) {
      if (max < +key) {
        max = +key;
      }
    }

    result.push(dict[max]);
  }

  console.log(result.join('\n'));
}

solution(input);
