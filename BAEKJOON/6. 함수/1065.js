const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

N = Number(input[0]);
let hansooCount = 0;

// for (let i = 1; i <= N; i++) {
//   if (i < 100) {
//     hansooCount = i;
//   } else {
//     let numArr = i
//       .toString()
//       .split("")
//       .map((n) => Number(n));

//     if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
//       hansooCount += 1;
//     }
//   }
// }
// console.log(hansooCount);

if (N < 100) {
  hansooCount = N;
} else {
  for (let i = 100; i <= N; i++) {
    let numArr = i
      .toString()
      .split("")
      .map((n) => Number(n));

    if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
      hansooCount += 1;
    }
  }

  hansooCount += 99;
}
console.log(hansooCount);
