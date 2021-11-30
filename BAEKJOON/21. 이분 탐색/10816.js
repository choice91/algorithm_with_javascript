const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./10816_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, cards, M, nums] = input;
const answer = [];

const cardsSet = cards
  .split(" ")
  .map((n) => +n)
  .reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }
    acc[cur] += 1;
    return acc;
  }, {});

nums.split(" ").forEach((el) => {
  answer.push(cardsSet[el] || 0);
});

console.log(answer.join("\n"));
