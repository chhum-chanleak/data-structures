// to store element and its priority
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// Priority Queue class
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  // check if queue is empty
  isEmpty = () => {
    // return true if item is empty
    return this.items.length === 0;
  };
  //  functions
  //  enqueue element
  enqueue = (element, priority) => {
    //  create object
    let qElement = new QElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    //  if the element have the highest priority
    //  it is added at the end of queue
    if (!contain) {
      this.items.push(qElement);
    }
  };

  // dequeue element
  dequeue = () => {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  };

  //  front function
  front = () => {
    if (this.isEmpty) {
      return "No elements in queue";
    }
    return this.items[0];
  };

  // rear function
  rear = () => {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }

    return this.items[this.items.length - 1];
  };

  //  printPQueue
  printPQueue = () => {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].element + " ";
    }
    return str;
  };
}

const pq = new PriorityQueue();

console.log(pq.isEmpty());
console.log(pq.font());
console.log(pq.rear());

pq.enqueue("Sumit", 2);
pq.enqueue("Gourav", 1);
pq.enqueue("Piyush", 1);
pq.enqueue("Sunny", 2);
pq.enqueue("Sheru", 3);

console.log(pq.printPQueue());
console.log(pq.front().element);
console.log(pq.rear().element);
console.log(pq.dequeue().element);

pq.enqueue("Sunil", 2);
console.log(pq.printPQueue());
