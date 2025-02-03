// ? Day 9: Trees
// * Session Focus: Introduction to binary trees and binary search trees, basic operations, and traversals.
// ? Session Practice Questions:
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    insert(data, root = this.root) {
        if (this.root == null) {
            this.root = new Node(data);
            return;
        }
        if (root.data > data && root.left == null) {
            root.left = new Node(data);
        } else if (root.data > data && root.left != null) {
            this.insert(data, root.left)
        } else if (root.data <= data && root.right == null) {
            root.right = new Node(data);
        } else if (root.data <= data && root.right != null) {
            this.insert(data, root.right)
        }
    }
    inorder(root = this.root) {
        if (root != null) {
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }
    // * Perform a pre - order traversal of a binary tree.
    preorder(root = this.root) {
        if (root != null) {
            console.log(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    postorder(root = this.root) {
        if (root != null) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.data)
        }
    }
    // ? Find the height of a binary tree.
    height(root = this.root) {
        if (root == null) {
            return 0;
        }
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        return 1 + (leftHeight < rightHeight ? rightHeight : leftHeight);
    }
    // ? Check if a binary tree is a binary search tree(BST).
    isBST(root = this.root) {
        if (root == null) {
            return true;
        }
        if (root.left != null && root.left.data > root.data) {
            return false;
        }
        if (root.right != null && root.right.data < root.data) {
            return false;
        }
        if (!this.isBST(root.left) || !this.isBST(root.right)) {
            return false;
        }
        return true;
    }
    // ? Count the number of leaf nodes in a binary tree.
    countLeaf(root = this.root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;
        return this.countLeaf(root.left) + this.countLeaf(root.right);
    }

    // ? Calculate the sum of all nodes in a binary tree.
    sum(root = this.root) {
        if (root == null) return 0;
        return root.data + this.sum(root.left) + this.sum(root.right);
    }
    // ? Find all root - to - leaf paths in a binary tree.
    rootToLeaf() {
        const ans = [];
        function solve(root, path = []) {
            if (root == null) return;
            path.push(root.data);
            if (root.left == null && root.right == null) {
                ans.push(path.join(" -> "));
            }
            solve(root.left, path);
            solve(root.right, path);
            path.pop();
        }
        solve(this.root);
        return ans;
    }
    // ? Find the lowest common ancestor(LCA) of two nodes in a BST.
    lowestCommonAncestor(val1, val2, root = this.root) {
        if (root == this.root) console.log(val1, val2)
        if (root == null || root.data == val2 || root.data == val1) return root;
        const left = this.lowestCommonAncestor(val1, val2, root.left);
        const right = this.lowestCommonAncestor(val1, val2, root.right);
        if (left && right) return root;
        return left ? left : right;
    }
}

const bst = new BST()
const arr = Array.from({ length: 10 }, () => {
    x = Math.floor(Math.random() * 100);
    bst.insert(x);
    return x;
})
bst.inorder()
bst.preorder()
bst.postorder()
console.log(bst.height())
console.log(bst.isBST())
console.log(bst.countLeaf())
console.log(bst.sum())
console.log(bst.rootToLeaf().join(",  "))
console.log(bst.lowestCommonAncestor(arr[Math.floor(Math.random() * arr.length)], arr[Math.floor(Math.random() * arr.length)]).data)
// todo Post - Session Practice Questions:
// todo Perform an in-order traversal iteratively.
// todo Find the diameter of a binary tree.
// todo Check if two binary trees are identical.
// todo Convert a binary tree to a doubly linked list.
// todo Construct a binary tree from its inorder and preorder traversals.
// todo Print all nodes at k distance from the root.
// todo Serialize and deserialize a binary tree.
// todo Find the level with the maximum sum in a binary tree.
// todo Calculate the depth of the deepest leaf node.
// todo Convert a BST to a balanced BST.
