const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 0;
let answer = "";

while (i < input.length - 1) {
  let A = Number(input[i].split(" ")[0]);
  let B = Number(input[i].split(" ")[1]);

  if (A !== 0 && B !== 0) {
    answer += `${A + B}` + "\n";
  } else {
    break;
  }

  i++;
}

console.log(answer);
