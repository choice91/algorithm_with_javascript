/**
 * 백준 11557번: Yangjojang of The Year
 * 알고리즘 분류: 구현, 정렬
 */
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './11557_input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((v) => v.trim());

function solution(input) {
  const testCase = +input.shift();

  for (let i = 0; i < testCase; i++) {
    const schoolCount = +input.shift();
    const schools = input.splice(0, schoolCount);
    const dict = {};

    schools.forEach((school) => {
      const [schoolName, alcoholCount] = school.split(' ');
      dict[alcoholCount] = schoolName;
    });

    let max = 0;

    for (const key in dict) {
      if (max < +key) {
        max = +key;
      }
    }

    console.log(dict[max]);
  }
}

solution(input);
