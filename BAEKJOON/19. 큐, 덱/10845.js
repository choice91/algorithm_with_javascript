const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./10845_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  _push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.size++;
  }
  _pop() {
    if (this.size > 2) {
      const value = this.head.value;
      const newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
      this.size--;
      return value;
    } else if (this.size === 2) {
      const value = this.head.value;
      this.head = this.tail;
      this.head.prev = null;
      this.tail.next = null;
      this.size--;
      return value;
    } else if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }
    return -1;
  }
  _size() {
    return this.size;
  }
  _empty() {
    if (!this.size) {
      return 1;
    }
    return 0;
  }
  _front() {
    if (!this.size) {
      return -1;
    }
    return this.head.value;
  }
  _back() {
    if (!this.size) {
      return -1;
    }
    return this.tail.value;
  }
}

const N = +input.shift();
const queue = new Queue();
const answer = [];

for (let i = 0; i < N; i++) {
  const [order, num] = input[i].trim().split(" ");
  switch (order) {
    case "push": {
      queue._push(+num);
      break;
    }
    case "pop": {
      answer.push(queue._pop());
      break;
    }
    case "size": {
      answer.push(queue._size());
      break;
    }
    case "empty": {
      answer.push(queue._empty());
      break;
    }
    case "front": {
      answer.push(queue._front());
      break;
    }
    case "back": {
      answer.push(queue._back());
      break;
    }
  }
}
console.log(answer.join("\n"));
