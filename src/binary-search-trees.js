class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

// binary search tree
class BST {
  constructor() {
    this.root = null;
  }

  // insert data
  insert(data) {
    const node = new Node(data);

    //  check if the root is empty
    if (this.root === null) {
      this.root = node;
      return;
    }

    // keep the current node;
    let current = this.root;
    while (true) {
      // compare data
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        }

        current = current.right;
      }
    }
  }
}

const tree = new BST();

tree.insert(50);
tree.insert(31);
tree.insert(60);
tree.insert(35);
tree.insert(51);
tree.insert(90);

console.log(tree);
