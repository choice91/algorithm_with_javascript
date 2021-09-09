const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const M = +input[0];
const N = +input[1];
const primeArrBool = new Array(N + 1).fill(true);
primeArrBool[0] = false;
primeArrBool[1] = false;
const primeArr = [];

for (let i = 2; i <= N; i++) {
  if (primeArrBool[i]) {
    for (let j = i * 2; j <= N; j += i) {
      primeArrBool[j] = false;
    }
  }
}

for (let k = M; k <= N; k++) {
  if (primeArrBool[k]) {
    primeArr.push(k);
  }
}

console.log(primeArr.join("\n"));
