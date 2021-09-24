const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const weightTallInfo = input.map((el) => el.split(" ").map((n) => +n));

function solution(info) {
  const result = [];

  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      if (info[i][0] < info[j][0] && info[i][1] < info[j][1]) {
        rank += 1;
      }
    }
    result.push(rank);
  }

  return result;
}

const answer = solution(weightTallInfo);
console.log(answer.join(" "));
