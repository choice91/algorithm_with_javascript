const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

for (let i = 0; i < n; i++) {
  const clothesCount = +input.shift();
  const clothes = input.splice(0, clothesCount);
  const clothesMap = clothes.reduce((acc, cur) => {
    const [name, kind] = cur.trim().split(" ");
    if (!acc[kind]) {
      acc[kind] = [];
    }
    acc[kind].push(name);
    return acc;
  }, {});
  let cnt = 1;
  for (let key in clothesMap) {
    cnt *= clothesMap[key].length + 1;
  }
  console.log(cnt - 1);
}
