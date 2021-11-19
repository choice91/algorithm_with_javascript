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

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(value) {
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
  getHead() {
    return this.head.value;
  }
  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }
  getSize() {
    return this.size;
  }
}

const N = +input[0];

const linkedList = new LinkedList();

for (let i = 1; i <= N; i++) {
  linkedList.add(i);
}

while (linkedList.getSize() !== 1) {
  linkedList.removeHead();
  linkedList.add(linkedList.getHead());
  linkedList.removeHead();
}

console.log(linkedList.getHead());
