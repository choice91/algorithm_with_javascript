const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const words = input;

const wordsSet = new Set(words);
const lastWords = [...wordsSet];

lastWords.sort((a, b) => {
  if (a.length === b.length) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  return a.length - b.length;
});
console.log(lastWords.join("\n"));
