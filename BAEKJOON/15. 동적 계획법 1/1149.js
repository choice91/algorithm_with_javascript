const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
let homeColorPrice = input.map((el) => el.split(" ").map((n) => +n));

for (let i = 1; i < N; i++) {
  homeColorPrice[i][0] =
    homeColorPrice[i][0] +
    Math.min(homeColorPrice[i - 1][1], homeColorPrice[i - 1][2]);
  homeColorPrice[i][1] =
    homeColorPrice[i][1] +
    Math.min(homeColorPrice[i - 1][0], homeColorPrice[i - 1][2]);
  homeColorPrice[i][2] =
    homeColorPrice[i][2] +
    Math.min(homeColorPrice[i - 1][0], homeColorPrice[i - 1][1]);
}
console.log(Math.min(...homeColorPrice[N - 1]));
