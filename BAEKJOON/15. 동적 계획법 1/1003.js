const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const testCase = input.map((n) => +n);

function fibo(n) {
  const zeroCount = [1, 0];
  const oneCount = [0, 1];
  if (n < 2) {
    console.log(zeroCount[n], oneCount[n]);
    return;
  }
  for (let i = 2; i <= n; i++) {
    zeroCount.push(zeroCount[i - 2] + zeroCount[i - 1]);
    oneCount.push(oneCount[i - 2] + oneCount[i - 1]);
  }
  console.log(zeroCount[n], oneCount[n]);
}

for (let i = 0; i < T; i++) {
  fibo(testCase[i]);
}
