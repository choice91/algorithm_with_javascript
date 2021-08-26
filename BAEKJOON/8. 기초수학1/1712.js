const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

input = input.map((n) => Number(n));
let A = input[0]; // 고정비용
let B = input[1]; // 가변비용
let C = input[2]; // 노트북 가격
/**
 * 판매비용 = C * x
 * 총 비용 = A + B * x
 * 손익분기점이 되려면 C * x > A + B * x의 공식이 성립해야한다.
 * (C - B) * x > A
 * C - B <= 0이 되면 손익분기점은 없다.
 * C - B > 0이면 x > A / (C - B)
 */
if (C - B <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(A / (C - B)) + 1);
}
