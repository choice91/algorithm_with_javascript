const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./5430_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    if (!this.size) {
      return true;
    }
    return false;
  }
  pushBack(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size += 1;
  }
  popFront() {
    if (!this.size) {
      return -1;
    }
    const head = this.head;
    this.head = this.head.next;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.size--;
    return head.value;
  }
  popBack() {
    if (!this.size) {
      return -1;
    }
    const tail = this.tail;
    this.tail = this.tail.prev;
    if (this.size === 1) {
      this.tail = null;
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.size--;
    return tail.value;
  }
}

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const deque = new Deque();
  const command = input.shift().trim().split("");
  const n = +input.shift();
  // let nums = input.shift().trim().slice(1, -1).split(",");
  let nums = JSON.parse(input.shift());
  let reverseType = true; // 정방향은 true, 역방향은 false
  nums.forEach((num) => {
    deque.pushBack(num);
  });
  let isError;
  for (let j = 0; j < command.length; j++) {
    switch (command[j]) {
      case "R": {
        reverseType = !reverseType;
        break;
      }
      case "D": {
        if (deque.isEmpty()) {
          isError = true;
        } else {
          if (reverseType) {
            deque.popFront();
          } else {
            deque.popBack();
          }
        }
        break;
      }
    }
  }
  if (isError) {
    console.log("error");
    isError = false;
    continue;
  }
  const result = [];
  if (reverseType) {
    while (!deque.isEmpty()) {
      result.push(deque.popFront());
    }
  } else {
    while (!deque.isEmpty()) {
      result.push(deque.popBack());
    }
  }
  console.log(`[${result.join(",")}]`);
}
