const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
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
    return newNode;
  }
  _pop() {
    if (this.size > 2) {
      const headValue = this.head.value;
      const newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
      this.size--;
      return headValue;
    } else if (this.size === 2) {
      const headValue = this.head.value;
      this.head = this.tail;
      this.head.next = null;
      this.head.prev = null;
      this.size--;
      return headValue;
    } else if (this.size === 1) {
      const headValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return headValue;
    }
    return -1;
  }
  _size() {
    return this.size;
  }
  _empty() {
    return this.size ? 0 : 1;
  }
  _front() {
    return this.head ? this.head.value : -1;
  }
  _back() {
    return this.tail ? this.tail.value : -1;
  }
}

const N = +input.shift();

const queue = new Queue();
let answer = [];

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
