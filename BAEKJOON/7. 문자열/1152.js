const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 실패함
// input = input[0].trim().split(" ");
// console.log(input.length);

input = input[0].trim().split(" ");
let count = 0;

input.forEach((element) => {
  if (element !== "") count += 1;
});

// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== "") count += 1;
// }

console.log(count);
