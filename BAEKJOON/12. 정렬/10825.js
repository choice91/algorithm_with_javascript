/**
 * 백준 10825번: 국영수
 * 알고리즘 분류: 정렬
 */
const PROBLEM_NUMBER = 10825;

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `./${PROBLEM_NUMBER}_input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...students] = input.map((v) => v.trim());

function solution(n, students) {
  students = students.map((student) =>
    student.split(' ').map((value) => +value || value)
  );

  students.sort((cur, prev) => {
    if (cur[1] < prev[1]) {
      return 1;
    } else if (cur[1] > prev[1]) {
      return -1;
    } else {
      if (cur[2] > prev[2]) {
        return 1;
      } else if (cur[2] < prev[2]) {
        return -1;
      } else {
        if (cur[3] < prev[3]) {
          return 1;
        } else if (cur[3] > prev[3]) {
          return -1;
        } else {
          if (cur[0] > prev[0]) {
            return 1;
          } else if (cur[0] < prev[0]) {
            return -1;
          } else {
            return 0;
          }
        }
      }
    }
  });

  const result = [];

  for (let student of students) {
    result.push(student[0]);
  }

  return result.join('\n');
}

console.log(solution(N, students));
