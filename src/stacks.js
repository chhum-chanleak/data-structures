class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //  Push item
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;

    return this.count - 1;
  }

  //    Return and remove top element
  //    Return undefined if there is no element
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //    Display top element in stack
  peek() {
    if (this.count === 0) {
      return undefined;
    }
    let lastItem = this.items[this.count - 1];
    console.log(`Top element is ${lastItem}`);
    return lastItem;
  }
  //    Size of the stack
  size() {
    let size = this.count;
    if (size === 0) {
      console.log("Stack is empty");
    } else {
      console.log(`Size of the stack is ${size}`);
    }

    return size;
  }

  // Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared!");
    return this.items;
  }

  //    Diplay stack
  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(`${this.items[i]} `);
    }
  }
}

const stack = new Stack();

stack.push(10); // Push element to stack
stack.push(20);
stack.push(30);

stack.pop(); // Remove last element(30) from stack

stack.peek(); //    Display top element(20)

stack.size(); //    Check the size of stack(2)

stack.print(); //   Disiplay stack(10, 20)

stack.clear(); //   Remove all elements from stack
