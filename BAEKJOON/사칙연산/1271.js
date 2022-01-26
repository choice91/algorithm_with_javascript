const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1271_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [n, m] = input.map((n) => BigInt(n));

let answer = n / m + "\n";
answer += n % m;
console.log(answer);
