class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // check if empty
  isEmpty() {
    return !this.front;
  }

  // insert value to queue
  enqueue(value) {
    console.log("ENQUEUE", value);
    //  create a new node with value
    let node = new Node(value);

    // if queue is empty
    //  point front and back to new node
    if (this.isEmpty()) {
      this.front = this.back = node;
    }

    //  else the queue is not empty
    //  push node to back of the queue
    // by pointing the last to the newly created node
    else {
      this.back.next = node;

      //  move back point to new node
      this.back = node;
    }

    this.print();
  }

  // remove value from queue
  dequeue() {
    let node = this.front;
    console.log("DEQUEUE", node.value);
    if (!this.isEmpty()) {
      this.front = this.front.next;
    }

    if (!this.front) {
      this.back = null;
    }

    this.print();

    return node;
  }

  // display
  print() {
    //  if the queue is empty
    if (this.isEmpty()) {
      console.log("Queue is empty!");
    } else {
      let tmpArr = [];
      let tmp = this.front;

      while (tmp) {
        tmpArr.push(tmp.value);

        tmp = tmp.next;
      }

      console.log(tmpArr);
    }
  }
}

let q = new Queue();

// insert values to queue [10, 20, 30]
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

//  display queue
q.print();

// remove first values(10) from queue
q.dequeue();
