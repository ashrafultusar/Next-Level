class Queue {
  constructor() {
    this.item = [];
  }
  push(value) {
    this.item.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item.shift();
  }

  peek() {
    if (this.isEmpty) {
      return undefined;
    }
    return this.item(0);
  }

  isEmpty() {
    return this.item.length === 0;
  }

  print() {
    console.log("start", this.item.join("->"), "-> end");
  }
}

const queue = new Queue();

queue.push(19)
queue.push(29)
queue.push(29)
queue.print()

queue.pop()
queue.print()