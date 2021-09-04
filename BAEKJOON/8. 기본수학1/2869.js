const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = Number(input[0]); // 낮에 달팽이가 올라가는 높이
let B = Number(input[1]); // 밤에 달팽이가 미끄러지는 거리
let V = Number(input[2]); // 나무의 높이
let day = Math.ceil((V - A) / (A - B) + 1);
console.log(day);
