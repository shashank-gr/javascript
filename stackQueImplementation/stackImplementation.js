//Stack has foolowing operations pop, push, size,isEmpty,top.

class Stack {
  constructor(arr = []) {
    this.arr = arr;
    this.length = 0;
  }
  push(val) {
    this.arr.push(val);
    this.length++;
  }
  pop() {
    if (this.length > 0) {
      this.length--;
      return this.arr.pop();
    } else {
      return `Stack is Empty`;
    }
  }
  size() {
    return this.length;
  }
  top() {
    if (this.length > 0) {
      return this.arr[this.length - 1];
    } else {
      return `Stack is Empty`;
    }
  }
}

const s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
// console.log(s1.size());
console.log(s1.pop());
// console.log(s1.size());
// console.log(s1.top());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
console.log(s1.size());
console.log(s1.top());
