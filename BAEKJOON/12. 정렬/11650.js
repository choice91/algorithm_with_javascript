const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const coordinate = input.map((coords) => coords.split(" ").map((n) => +n));
let answer = "";
coordinate
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach((coords) => {
    answer += `${coords[0]} ${coords[1]}\n`;
  });
console.log(answer);
