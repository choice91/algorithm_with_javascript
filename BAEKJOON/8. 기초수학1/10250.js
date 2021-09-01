const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let testCase = input[i].split(" ").map((n) => Number(n));
  let H = testCase[0];
  let W = testCase[1];
  let N = testCase[2];
  let roomNumber = 101;

  if (N % H === 0) {
    roomNumber = H * 100 + Math.floor(N / H);
  } else {
    roomNumber = (N % H) * 100 + Math.floor(N / H) + 1;
  }
  console.log(roomNumber);
}
