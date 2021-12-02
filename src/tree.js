// binary tree node
const TreeNode = (val, left, right) => {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const inorderTraversal = (root) => {
  // check if root is null
  if (root === null) {
    return [];
  }

  const result = [];
  // check if root has a left child
  if (root.left !== null) {
    result.push(...inorderTraversal(root.left));
  }
  result.push(root.val);
  // check if root has a right child
  if (root.right !== null) {
    result.push(...inorderTraversal(root.right));
  }

  return result;
};
