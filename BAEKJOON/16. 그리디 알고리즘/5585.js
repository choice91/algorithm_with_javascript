/**
 * 백준 5585번: 거스름돈
 * 알고리즘 분류: 그리디 알고리즘
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./5585_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const MONEY = 1000;
const price = +input[0];
let changes = MONEY - price;
const coins = [500, 100, 50, 10, 5, 1];
let coinCount = 0;

for (let i = 0; i < coins.length; i++) {
  coinCount += Math.floor(changes / coins[i]);
  changes -= Math.floor(changes / coins[i]) * coins[i];
}

console.log(coinCount);
