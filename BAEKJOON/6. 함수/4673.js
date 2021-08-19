// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

const selfNumber = []; // 셀프넘버 배열
const constructorList = []; // 생성자 배열

function d(n) {
  let sum = 0;

  n.toString()
    .split("")
    .map((num) => (sum += Number(num)));

  return sum + n;
}

for (let i = 1; i <= 10000; i++) {
  constructorList.push(d(i));
}

for (let i = 1; i <= 10000; i++) {
  if (!constructorList.includes(i)) {
    selfNumber.push(i);
  }
}

selfNumber.forEach((n) => console.log(n));
