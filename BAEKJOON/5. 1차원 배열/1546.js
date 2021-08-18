const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 점수를 숫자로 변환 후 배열로 저장
input = input[1].split(" ").map((n) => Number(n));
let avg = 0;
let sum = 0;

// 오름차순으로 정렬
input.sort((a, b) => {
  return a - b;
});

// 정렬된 배열에서 마지막 값이 최대값
let max = input[input.length - 1];

// 각 점수를 점수/max * 100으로 수정
for (let i = 0; i < input.length; i++) {
  input[i] = (input[i] / max) * 100;
}

// 모든 점수의 합
for (let i = 0; i < input.length; i++) {
  sum += input[i];
}

// 평균
avg = sum / input.length;
console.log(avg);
