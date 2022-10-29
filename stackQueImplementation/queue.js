class MyQueue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.arr = new Array(100005);
  }

  /**
   * @param {number} x
   */

  //Function to push an element x in a queue.
  push(x) {
    this.arr[this.rear] = x;
    this.rear++;
  }

  /**
   * @returns {number}
   */

  //Function to pop an element from queue and return that element.
  pop() {
    if (this.front > this.rear) {
      return -1;
    } else {
      const val = this.arr[this.front];
      this.front++;
      return val;
    }
  }
}
//1 2 1 3 2 1 4 2
const q = new MyQueue();
q.push(2);
q.push(3);
console.log(q.pop());
q.push(4);
console.log(q.pop());
console.log(q.arr);
