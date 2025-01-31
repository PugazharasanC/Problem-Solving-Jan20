// ? Day 8: Linked Lists
// * Session Focus: Introduction to linked lists and basic operations: insertion, deletion, and traversal.
// ? Session Practice Questions:
// ! Implement a LinkedList using Class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkdeList {
    constructor() {
        this.head = null;
        this.len = 0;
    }
    insert(data, first = true) {
        this.len++;
        if (this.head == null) {
            this.head = new Node(data);
        }
        else if (first) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let head = this.head;
            while (head.next != null) {
                head = head.next;
            }
            head.next = new Node(data);
        }
    }
    deleteLastNode() {
        let head = this.head;
        if (head == null) return;
        if (head.next == null) {
            this.head = null;
        } else {
            while (head.next.next != null) {
                head = head.next;
            }
            head.next = null;
        }
        this.len--;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev;
    }

    print() {
        let res = ["head"];
        let head = this.head;
        while (head != null) {
            res.push(head.data);
            head = head.next;
        }
        res.push("null");
        return (res.join(" -> "))
    }

    makeCycle() {
        const x = Math.floor(Math.random() * this.len);
        // console.log(this.len, x)
        let count = 0;
        let head = this.head;
        let temp = this.head;
        while (head.next) {
            count++;
            if (count == x) {
                temp = head;
            }
            head = head.next;
        }
        head.next = temp;
    }

    dedectCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
    middleNode() {
        let slow = this.head;
        let fast = this.head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return slow.data;
            }
        }
        return slow.data;
    }
    removeDuplicates() {
        let head = this.head;
        while (head != null && head.next != null) {
            if (head.data == head.next.data) {
                head.next = head.next.next;
            } else {
                head = head.next;
            }
        }
    }
}
// ! Insert a node at the beginning of a linked list.
const list = new LinkdeList();
// console.log(list.print())
list.insert("Pugazh");
// console.log(list.print())
list.insert("Dinesh Kumar")
list.insert("Gokul V");
// console.log(list.print())
list.insert("Jany Daniel")
list.insert("Muhamad siddiq N")
list.insert("Papitha")
// console.log(list.print())
// ! Insert a node at the end of a linked list.
list.insert("Prasanna venkatesh S", false)
list.insert("Priya ashok", false)
list.insert("Rajesh B", false)
list.insert("Salma M", false)
list.insert("Santha Lakshmi", false)
list.insert("Vasantharuban S", false)
// console.log(list.print())
// ! Delete the last node in a linked list.
list.insert("last node", false);
// console.log(list.print())
list.deleteLastNode();
// console.log(list.print())
// ! Reverse a linked list iteratively.
list.reverse()
// console.log(list.print())
// ! Detect a cycle in a linked list using fast and slow pointers.
// list.makeCycle()
if (list.dedectCycle())
    console.log("Cycle detected")
else
    console.log(list.print())
// ! Find the middle node of a linked list.
// console.log(list.middleNode())
// ! Merge two sorted linked lists.
const list1 = new LinkdeList();
let x = 0;
for (let _ = 0; _ < 15; _++) {
    x += Math.floor(Math.random() * 5)
    list1.insert(x, false)
}
x = 0;
// console.log(list1.print())
const list2 = new LinkdeList();
for (let _ = 0; _ < 15; _++) {
    x += Math.floor(Math.random() * 5)
    list2.insert(x, false)
}
// console.log(list2.print())
const merge = (list1, list2) => {
    const newList = new LinkdeList();;
    let head1 = list1.head;
    let head2 = list2.head;;

    while (head1 != null && head2 != null) {
        if (head1.data < head2.data) {
            newList.insert(head1.data, false)
            head1 = head1.next;
        } else {
            newList.insert(head2.data, false)
            head2 = head2.next;
        }
    }

    while (head1 != null) {
        newList.insert(head1.data, false)
        head1 = head1.next;
    }

    while (head2 != null) {
        newList.insert(head2.data, false)
        head2 = head2.next;
    }
    return newList;
}
// console.log(list1.print())
// console.log(list2.print())
const withDuplicates = merge(list1, list2)
// ! Remove duplicates from a sorted linked list.
console.log(withDuplicates.print())
withDuplicates.removeDuplicates()
console.log(withDuplicates.print())

// todo Post - Session Practice Questions:
// todo Reverse a linked list recursively.
// todo Check if a linked list is a palindrome.
// todo Remove the n - th node from the end of a linked list.
// todo Find the intersection point of two linked lists.
// todo Flatten a multilevel doubly linked list.
// todo Add two numbers represented by linked lists.
// todo Partition a linked list around a value x.
// todo Clone a linked list with random pointers.
// todo Split a linked list into two halves.
// todo Sort a linked list using merge sort.
