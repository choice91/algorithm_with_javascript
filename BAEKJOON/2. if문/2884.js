const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

function solution(h, m) {
  if (m - 45 < 0) {
    h -= 1;
    m = m - 45 + 60;

    if (h < 0) {
      h += 24;
    }
  } else {
    m -= 45;
  }
  console.log(h, m);
}

input = input.map((item) => +item);

solution(input[0], input[1]);
