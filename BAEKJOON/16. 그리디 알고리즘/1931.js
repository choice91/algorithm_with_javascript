const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const conferences = input.map((el) => el.split(" ").map((n) => +n));

conferences.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 1;
let temp = conferences[0];
for (let i = 1; i < N; i++) {
  if (temp[1] <= conferences[i][0]) {
    count += 1;
    temp = conferences[i];
  }
}
console.log(count);
