const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const testCase = input.map((value) => value.split(" ").map((n) => +n));

function findCoordinate(coordArr) {
  const x1 = coordArr[0];
  const y1 = coordArr[1];
  const r1 = coordArr[2];
  const x2 = coordArr[3];
  const y2 = coordArr[4];
  const r2 = coordArr[5];

  const diff = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (diff === 0) {
    if (r1 === r2) {
      console.log("-1");
    } else {
      console.log("0");
    }
  } else {
    if (diff === r1 + r2 || diff === Math.abs(r1 - r2)) {
      console.log("1");
    } else if (diff > r1 + r2 || diff < Math.abs(r1 - r2)) {
      console.log("0");
    } else {
      console.log("2");
    }
  }
}

for (let i = 0; i < T; i++) {
  findCoordinate(testCase[i]);
}
