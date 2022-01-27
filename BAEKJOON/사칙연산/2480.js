const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2480_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const dice = input.map((n) => +n);

function getReward(d1, d2, d3) {
  if (d1 === d2 && d2 === d3 && d1 === d3) {
    return 10000 + d1 * 1000;
  } else if (d1 === d2) {
    return 1000 + d1 * 100;
  } else if (d1 === d3) {
    return 1000 + d1 * 100;
  } else if (d2 === d3) {
    return 1000 + d2 * 100;
  } else {
    const maxNum = Math.max(...dice);
    return maxNum * 100;
  }
}

console.log(getReward(dice[0], dice[1], dice[2]));
