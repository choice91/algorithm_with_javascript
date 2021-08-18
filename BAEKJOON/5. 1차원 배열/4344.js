const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  let avg = 0; // 평균
  let sum = 0; // 점수의 합
  let overAvgCount = 0; // 평균을 넘어가는 학생들의 수
  let rate = 0; // 평균을 넘어가는 학생들의 비율
  let testCase = input[i].split(" ").map((n) => Number(n));

  // 각 테스트케이스의 점수들의 합
  for (let j = 1; j <= testCase[0]; j++) {
    sum += testCase[j];
  }
  // 점수들의 평균
  avg = sum / testCase[0];

  // 평균을 넘어가는 학생들의 수
  for (let k = 1; k <= testCase[0]; k++) {
    if (testCase[k] > avg) {
      overAvgCount += 1;
    }
  }

  // 평균을 넘어가는 학생들의 비율
  rate = (overAvgCount / testCase[0]) * 100;
  console.log(rate.toFixed(3) + "%");
}
