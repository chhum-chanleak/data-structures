class MinHeap {
  constructor() {
    this.heap = [null];
  }

  //  access the min element at index 1 in the heap array
  getMin = () => {
    return this.heap[1];
  };

  insert = (node) => {
    //  insert the new node at the end of the heap array
    this.heap.push(node);

    // find the correct position for the new node
    if (this.heap.length) {
      let current = this.heap.length - 1;

      //  traverse up the parent node until the current node is greater than the parent
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        // swap the two nodes by using es6 destructuring syntax
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  };

  remove = () => {
    //  smallest element is at the index 1 in the heap array
    let smallest = this.heap[1];

    //  when there are more than 2 elements in the array, we put the right most element at
    // first position and start comparing nodes with the child nodes
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
      if (
        this.heap[rightChildIndex] === undefined &&
        this.heap[leftChildIndex] < this.heap[current]
      ) {
        [this.heap[current], this.heap[leftChildIndex]] = [
          this.heap[leftChildIndex],
          this.heap[current],
        ];
      }

      //  if there are only two elements  in the array, splice out the first element
      else if (this.heap.length === 2) {
        this.heap.splice(1, 1);
      } else {
        return null;
      }

      return smallest;
    }
  };
}

const m = new MinHeap();

m.insert(10);
m.insert(20);
m.insert(30);
m.insert(40);

m.getMin();

m.remove();
