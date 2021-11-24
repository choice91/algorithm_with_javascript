const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
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
  push_front(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  push_back(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }
  pop_front() {
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
      this.tail.prev = null;
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
  pop_back() {
    if (this.size > 2) {
      const tailValue = this.tail.value;
      const newTail = this.tail.prev;
      this.tail = newTail;
      this.tail.next = null;
      this.size--;
      return tailValue;
    } else if (this.size === 2) {
      const tailValue = this.tail.value;
      this.tail = this.head;
      this.head.next = null;
      this.tail.next = null;
      this.size--;
      return tailValue;
    } else if (this.size === 1) {
      const tailValue = this.tail.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return tailValue;
    }
    return -1;
  }
  _size() {
    return this.size;
  }
  empty() {
    return !this.size ? 1 : 0;
  }
  front() {
    if (!this.size) {
      return -1;
    }
    return this.head.value;
  }
  back() {
    if (!this.size) {
      return -1;
    }
    return this.tail.value;
  }
}

const N = +input.shift();
const deque = new Deque();
const answer = [];

for (let i = 0; i < N; i++) {
  const [order, num] = input[i].split(" ");
  switch (order.trim()) {
    case "push_front": {
      deque.push_front(+num);
      break;
    }
    case "push_back": {
      deque.push_back(+num);
      break;
    }
    case "pop_front": {
      answer.push(deque.pop_front());
      break;
    }
    case "pop_back": {
      answer.push(deque.pop_back());
      break;
    }
    case "size": {
      answer.push(deque._size());
      break;
    }
    case "empty": {
      answer.push(deque.empty());
      break;
    }
    case "front": {
      answer.push(deque.front());
      break;
    }
    case "back": {
      answer.push(deque.back());
      break;
    }
  }
}
console.log(answer.join("\n"));
