const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

let tiles = Array(1000001).fill(0);
tiles[1] = 1;
tiles[2] = 2;

for (let i = 3; i <= N; i++) {
  tiles[i] = (tiles[i - 2] + tiles[i - 1]) % 15746;
}
console.log(tiles[N]);
